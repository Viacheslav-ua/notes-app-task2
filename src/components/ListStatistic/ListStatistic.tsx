import { grey } from '@mui/material/colors'
import Icon from '@mui/material/Icon';
import style from './ListStatistic.module.css'

const ListStatistic: React.FC = () => { 
  return (
    <tr className={style.tableRow}>
      <td className={style.cellCenter}>
        <div className={style.circleIcon}>
          <Icon sx={{ color: grey[50] }}>unarchive</Icon>
        </div>
      </td>
      <td>jkhlkjhlkjgh</td>
      <td>7</td>
      <td>5</td>
    </tr>
  )
}

export default ListStatistic 