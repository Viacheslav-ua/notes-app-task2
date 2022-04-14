import { grey } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import { useStatistic } from '../../hooks/statistic'
import style from './ListStatistic.module.css'


const ListStatistic: React.FC = () => {
  const statistic = useStatistic()
  
  return (
    <>
      {statistic.map((item) => (
        <tr key={item.categoryKey} className={style.tableRow}>
          <td className={style.cellCenter}>
            <div className={style.circleIcon}>
              <Icon sx={{ color: grey[50] }}>{item.categoryKey}</Icon>
            </div>
          </td>
          <td>{item.categoryName }</td>
          <td>{item.active }</td>
          <td>{item.archived}</td>
        </tr>
      ))
      }
    </>
  )
}

export default ListStatistic 