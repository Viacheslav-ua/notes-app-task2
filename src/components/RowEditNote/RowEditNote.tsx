import { grey, green, red } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import Fab from '@mui/material/Fab'
import TextField from "@mui/material/TextField"
import style from './RowEditNote.module.css'
import { Input } from '@mui/material'
import { INote } from '../../interfaces/INote'

type PropsType =  {
  itemNote: INote;
}

const RowEditNote: React.FC<PropsType> = ({itemNote}) => { 
  return (
    <tr className={style.tableRow}>
        <td className={style.cellCenter}>
          <div className={style.circleIcon}>
          <Icon sx={{ color: grey[50] }}>{itemNote.categoryKey}</Icon>
          </div>
        </td>
        <td>
        <input
          className={style.inputName}
          name="name"
          // value={name}
          // onChange={handleAddInput("^$|^[$a-zA-Zа-яА-Я -']*$")}
        />
        </td>
        <td>4/3/2022</td>
        <td>
          <select name="category" className={style.selectCategory}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </td>
        <td>
          <input
          className={style.inputContent}
          name="content"
          // value={name}
          // onChange={handleAddInput("^$|^[$a-zA-Zа-яА-Я -']*$")}
        />
        </td>
        <td>5/3/2022</td>
        <td>
          {/* <Fab className={style.fab} size="small" color="primary" aria-label="edit" title='Edit'>
            <Icon sx={{ color: grey[50] }}>mode_edit</Icon>
          </Fab> */}
        </td>
      <td>
        <Fab className={style.fabRow} size="small" color="primary" aria-label="edit">
          <Icon sx={{ fontSize: 28, color: green[400] }}>save_alt</Icon>
        </Fab>  
        </td>
      <td>
        <Fab className={style.fabRow} size="small" color="primary" aria-label="edit">
          <Icon sx={{ fontSize: 28, color: red[400] }}>close</Icon>
        </Fab>  
        </td>
      </tr>
  )
}

export default RowEditNote 