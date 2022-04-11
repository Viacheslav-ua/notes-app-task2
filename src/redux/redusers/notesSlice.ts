import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INote } from '../../interfaces/INote'
import { ICategory } from '../../interfaces/ICategory'
import notesStatic from '../../json/notes.json'
import categoryStatic from '../../json/category.json'

interface NotesState {
  notes: INote[];
  category: ICategory[];
  isLoading: Boolean;
  error: string;
}

const initialState: NotesState = {
  notes: [...notesStatic],
  category: [...categoryStatic],
  isLoading: false,
  error: "",
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // userFetching(state) {
    //   state.isLoading = true
    // },
    // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false
    //   state.error = ""
    //   state.users = action.payload
    // },
    // userFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false
    //   state.error = action.payload
    // },
  }

})

export default notesSlice.reducer