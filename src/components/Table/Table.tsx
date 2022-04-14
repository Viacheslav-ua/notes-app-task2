import style from './Table.module.css'

const Table: React.FC = ({children}) => { 
  return (
    <table className={style.table}>
      {children}
    </table>
  )
}

export default Table