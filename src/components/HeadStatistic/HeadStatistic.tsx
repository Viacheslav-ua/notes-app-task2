import style from './HeadStatistic.module.css'

const HeadStatistic: React.FC = () => { 
  return (
    <thead className={style.tableHeader}>
      <tr>
        <th className={style.cellIcon}></th>
        <th>Note Category</th>
        <th>Active</th>
        <th>Archived</th>
    </tr>
    </thead>
  )
}

export default HeadStatistic 