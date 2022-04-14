import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'
import { INote } from '../../interfaces/INote'
import { ICategory } from '../../interfaces/ICategory'
import { IStatistic } from "../../interfaces/IStatistic"
import notesStatic from '../../json/notes.json'
import categoryStatic from '../../json/category.json'

interface NotesState {
  notes: INote[];
  category: ICategory[];
  isDisabledBtn: boolean;
}

const initialState: NotesState = {
  notes: [...notesStatic],
  category: [...categoryStatic],
  isDisabledBtn: false,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state) {
      state.notes.push({
        id: uuidv4(),
        name: '',
        created: new Date().toLocaleDateString('en-GB'),
        category: "",
        categoryKey: "",
        content: "",
        dates: [],
        isArchive: false,
        isEdit: true,
        isNew: true,
      })
      state.isDisabledBtn = true
    },
    closeForm(state) {
      state.notes.splice(-1, 1)
      state.isDisabledBtn = false
    },
    saveNote(state, action: PayloadAction<INote>) {
      const index = state.notes.findIndex(item => item.id === action.payload.id)
      const newData = registerDates(action.payload.content, state.notes[index].dates)
      state.notes[index].name = action.payload.name
      state.notes[index].category = state.category.find(
        item => item.value === action.payload.categoryKey
      )?.desc
      state.notes[index].categoryKey = action.payload.categoryKey
      state.notes[index].content = action.payload.content
      if (newData !== '') state.notes[index].dates.push(newData)
      state.notes[index].isEdit = false
      state.notes[index].isNew = false
      state.isDisabledBtn = false
    },
    editNote(state, action: PayloadAction<string>) {
      const index = state.notes.findIndex(item => item.id === action.payload)
      state.notes[index].isEdit = true
      state.isDisabledBtn = true
    },
    toggleArchive(state, action: PayloadAction<string>) {
      const index = state.notes.findIndex(item => item.id === action.payload)
      state.notes[index].isArchive = !state.notes[index].isArchive
    },
    removeNote(state, action: PayloadAction<string>) {
      if (!window.confirm("Do you really want to delete this?")) {
        return
      }
      const index = state.notes.findIndex(item => item.id === action.payload)
      state.notes.splice(index, 1)
    }
  }

})

function registerDates(str: string, dates: string[]) {
  const strDate = str.match(/\d{1,2}[\\.\\/\\-]\d{1,2}[\\.\\/\\-]\d{4}/)
  if (!strDate) {
    return ''
  }
  const date = strDate[0].replace(/[\\.\\-]/g, '/')
  if (dates.find(item => item === date)) {
    return ''
  }
  return date
}
export default notesSlice.reducer