import { grey } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import Fab from '@mui/material/Fab'
import { INote } from '../../interfaces/INote'
import style from './RowNotes.module.css'

type PropsType =  {
  itemNote: INote;
}

const RowNotes: React.FC<PropsType> = ({ itemNote }) => { 
  return (
    <tr className={style.tableRow}>
        <td className={style.cellCenter}>
          <div className={style.circleIcon}>
          <Icon sx={{ color: grey[50] }}>{ itemNote.categoryKey }</Icon>
          </div>
        </td>
        <td>sfgsfeg</td>
        <td>4/3/2022</td>
        <td>Idea</td>
        <td>ftghj rtjety</td>
        <td>5/3/2022</td>
        <td>
          <Fab className={style.fabRow} size="small" color="primary" aria-label="edit">
            <Icon sx={{ color: grey[50] }}>mode_edit</Icon>
          </Fab>
        </td>
      <td>
        <Fab className={style.fabRow} size="small" color="primary" aria-label="edit">
          <Icon sx={{ color: grey[50] }}>archive</Icon>
        </Fab>  
        </td>
      <td>
        <Fab className={style.fabRow} size="small" color="primary" aria-label="edit">
          <Icon sx={{ color: grey[50] }}>delete</Icon>
        </Fab>  
        </td>
      </tr>
  )
}

export default RowNotes 