import Fab from '@mui/material/Fab'
import { useAppSelector } from '../../hooks/redux'
import RowEditNote from '../RowEditNote';
import RowNotes from '../RowNotes';

import style from './ListNote.module.css'

const ListNote: React.FC = () => {
  
  const { notes, viewArchive } = useAppSelector(state => state.notesReducer)
  const activeNotes = notes.filter(note => !note.isArchive)
    
  return (
    <tbody>
      {activeNotes.map((note) => note.isEdit
            ? (<RowEditNote itemNote={note}/>)
            : (<RowNotes itemNote={note}/>)
          // <RowEditNote itemNote={note}/>
      )}
    </tbody>
  )
}
export default ListNote
