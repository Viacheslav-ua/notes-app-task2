import { useAppSelector } from '../../hooks/redux'
import RowNotes from '../RowNotes';

const ListArchive: React.FC = () => {
  
  const { notes } = useAppSelector(state => state.notesReducer)
  const activeNotes = notes.filter(note => note.isArchive)
    
  return (
    <tbody>
      {activeNotes.map((note) =>
        (<RowNotes key={note.id} itemNote={note} />)
      )}
    </tbody>
  )
}
export default ListArchive
