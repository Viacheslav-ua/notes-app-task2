import style from './HeadStatistic.module.css'

const HeadStatistic: React.FC = () => { 
  return (
   <tr>
      <th className={style.cellIcon}></th>
      <th>Note Category</th>
      <th>Active</th>
      <th>Archived</th>
    </tr> 
  )
}

export default HeadStatistic 