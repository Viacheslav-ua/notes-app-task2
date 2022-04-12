import { NavLink, Outlet } from "react-router-dom"
import style from "./Layout.module.css"

import RowStatistic from "../ListStatistic";
import HeadStatistic from "../HeadStatistic";

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
        <HeadStatistic />
      </thead>
      <tbody>
        <RowStatistic />
        <RowStatistic />
    </tbody>
  </table>
      </div>
      </main>
    </>
  )
}

export default Layout