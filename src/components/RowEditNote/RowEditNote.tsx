import { grey, green, red } from '@mui/material/colors'
import Icon from '@mui/material/Icon'
import style from './RowEditNote.module.css'
import { notesSlice } from '../../redux/redusers/notesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { INote } from '../../interfaces/INote'
import { useState } from 'react'

type PropsType =  {
  itemNote: INote;
}

const RowEditNote: React.FC<PropsType> = ({ itemNote }) => {
  const { category } = useAppSelector(state => state.notesReducer)
  const { closeForm, saveNote } = notesSlice.actions
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>(itemNote.name)
  const [content, setContent] = useState<string>(itemNote.content)
  const [selectCategory, setSelectCategory] = useState<string>(selectedInit())
  
  function selectedInit() {
  if (itemNote.categoryKey !== '') {
    return itemNote.categoryKey
  }
   return category[0].value
  }
     
  const handleAddInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "name") setName(e.currentTarget.value)
    if (e.currentTarget.name === "content") setContent(e.currentTarget.value)    
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.name === "category") setSelectCategory(e.currentTarget.value)
  }

  const handleSave = () => dispatch(saveNote({
        id: itemNote.id,
        name: name,
        categoryKey: selectCategory,
        content: content,
        dates: itemNote.dates,
  }))

  
  return (
    <tr key={itemNote.id} className={style.tableRow}>
      <td className={style.cellCenter}>
        {!itemNote.isNew &&
        <div className={style.circleIcon}>
          <Icon sx={{ color: grey[50] }}>{itemNote.categoryKey}</Icon>
          </div>
        } 
        </td>
        <td>
        <input
          className={style.inputName}
          name="name"
          value={name}
          onChange={handleAddInput}
        />
        </td>
      <td>{itemNote.created}</td>
        <td>
        <select
          name="category"
          value={selectCategory}
          onChange={handleSelect}
          className={style.selectCategory}>
          {category.map((item) => (
            <option key={item.id} value={item.value}>{item.desc}</option>
          ))}
        </select>
        </td>
        <td>
          <input
          className={style.inputContent}
          name="content"
          value={content}
          onChange={handleAddInput}
        />
        </td>
        <td>{itemNote.dates.join(', ')}</td>
        <td></td>
      <td>
        {itemNote.isNew &&
          <div className={style.circleBtn} onClick={handleSave}>
            <Icon sx={{ fontSize: 28, color: green[400] }}>save_alt</Icon>
          </div>}
      </td>
      <td>
        {itemNote.isNew
          ? (
            <div className={style.circleBtn} onClick={() => dispatch(closeForm())}>
              <Icon sx={{ fontSize: 28, color: red[400] }}>close</Icon>
            </div>
          )
          : (
            <div className={style.circleBtn} onClick={handleSave}>
              <Icon sx={{ fontSize: 28, color: green[400] }}>save_alt</Icon>
            </div>
          )}
          
        </td>
      </tr>
  )
}

export default RowEditNote 