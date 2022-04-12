import Fab from '@mui/material/Fab'
import Table from "../../components/Table"
import HeadNote from "../../components/HeadNote"
import ListNote from "../../components/ListNote"
import style from './Active.module.css'

const ActiveNotes: React.FC = () => { 
  return (
    <>
    <Table>
      <HeadNote />
      <ListNote />
    </Table>
      <Fab className={style.fabAdd} variant="extended" size="medium" color="primary" aria-label="add">
        {/* <NavigationIcon sx={{ mr: 1 }} /> */}
        Create Note
      </Fab>
    </>
  )
}

export default ActiveNotes