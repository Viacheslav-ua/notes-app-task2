import { notesSlice } from '../../redux/redusers/notesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { grey } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import { INote } from '../../interfaces/INote'
import style from './RowNotes.module.css'

type PropsType =  {
  itemNote: INote;
}

const RowNotes: React.FC<PropsType> = ({ itemNote }) => { 
  const { editNote, toggleArchive, removeNote } = notesSlice.actions
  const dispatch = useAppDispatch()


  return (
    <tr key={itemNote.id} className={style.tableRow}>
        <td className={style.cellCenter}>
          <div className={style.circleIcon}>
          <Icon sx={{ color: grey[50] }}>{ itemNote.categoryKey }</Icon>
          </div>
        </td>
        <td>{ itemNote.name }</td>
        <td>{ itemNote.created }</td>
        <td>{ itemNote.category }</td>
        <td>{ itemNote.content }</td>
        <td>{ itemNote.dates.join(', ') }</td>
      <td>
        {!itemNote.isArchive &&
          <div className={style.circleBtn} onClick={() => dispatch(editNote(itemNote.id))}>
            <Icon sx={{ color: grey[50] }}>mode_edit</Icon>
          </div>}
        </td>
      <td>
        <div className={style.circleBtn} onClick={() => dispatch(toggleArchive(itemNote.id))}>
          <Icon sx={{ color: grey[50] }}>archive</Icon>
        </div>  
        </td>
      <td>
        <div className={style.circleBtn} onClick={() => dispatch(removeNote(itemNote.id))}>
          <Icon sx={{ color: grey[50] }}>delete</Icon>
        </div>  
        </td>
      </tr>
  )
}

export default RowNotes 