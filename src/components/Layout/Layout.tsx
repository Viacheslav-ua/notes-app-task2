import { NavLink, Outlet } from "react-router-dom"
import style from "./Layout.module.css";

const Layout: React.FC = () => { 
  return (
    <>
      <header className={style.header}>
        <NavLink className={style.link} to={'/'}>notes</NavLink>
        <NavLink className={style.link} to={'/archive'}>archive</NavLink>
      </header>
      <main className={style.container}>
        <div className={style.notes}>
          <Outlet />
        </div>
      
      <div>
      <table className={style.table}>
      <caption>Note Category Summary</caption>
      <thead className={style.tableHeader}>
      <tr>
        <td className={style.cellIcon}></td>
        <th>Note Category</th>
        <td>Active</td>
        <td>Archived</td>
      </tr>
           
    </thead>
    <tbody>
      <tr className={style.tableRow}>
        <td className={style.cellCenter}>
          <div className={style.circleIcon}>
            <i className="materialIcons">psychology</i>
          </div>
        </td>
        <td>jkhlkjhlkjgh</td>
        <td>7</td>
        <td>5</td>

      </tr>
      <tr className={style.tableRow}>
        <td className={style.cellCenter}>
          <div className={style.circleIcon}>
            <i className="materialIcons">psychology</i>
          </div>
        </td>
        <td>jkhlkjhlkjgh</td>
        <td>7</td>
        <td>5</td>

      </tr>
    </tbody>
  </table>
      </div>
      </main>
    </>
  )
}

export default Layout