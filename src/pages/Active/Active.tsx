import Table from "../../components/Table"
import HeadNote from "../../components/HeadNote"
import ListNote from "../../components/ListNote"
import style from './Active.module.css'

import { useAppDispatch } from '../../hooks/redux'
import { notesSlice } from '../../redux/redusers/notesSlice'
import { useAppSelector } from '../../hooks/redux'

const ActiveNotes: React.FC = () => {
  const { isDisabledBtn } = useAppSelector(state => state.notesReducer)
  const { createNote } = notesSlice.actions
  const dispatch = useAppDispatch()
  return (
    <>
      <Table>
        <HeadNote />
        <ListNote />
      </Table>
      <button disabled={isDisabledBtn} className={style.btnCreate}
        onClick={() => dispatch(createNote())}>
        Create Note
      </button> 
    </>
  )
}

export default ActiveNotes