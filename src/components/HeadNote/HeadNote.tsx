import style from './HeadNote.module.css'

const HeadNote: React.FC = () => { 
  return (
    <thead className={style.tableHeader}>
      <tr>
        <th className={style.cellIcon}></th>
        <th className={style.cellName}>Name</th>
        <th className={style.cellCreated}>Created</th>
        <th className={style.cellCategory}>Category</th>
        <th className={style.cellContent}> Content</th >
        <th className={style.cellDates}>Dates</th>
        <th className={style.cellIcon}></th>
        <th className={style.cellIcon}></th>
        <th className={style.cellIcon}></th>
      </tr>
    </thead>  
  )
}

export default HeadNote 