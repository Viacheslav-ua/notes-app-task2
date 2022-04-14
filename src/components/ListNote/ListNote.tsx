import { useAppSelector } from '../../hooks/redux'
import RowEditNote from '../RowEditNote';
import RowNotes from '../RowNotes';

const ListNote: React.FC = () => {
  
  const { notes } = useAppSelector(state => state.notesReducer)
  const activeNotes = notes.filter(note => !note.isArchive)
    
  return (
    <tbody>
      {activeNotes.map((note) => note.isEdit
        ? (<RowEditNote key={note.id} itemNote={note}/>)
            : (<RowNotes key={note.id} itemNote={note}/>)
      )}
    </tbody>
  )
}
export default ListNote
