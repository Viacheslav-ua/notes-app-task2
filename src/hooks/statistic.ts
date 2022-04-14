import { useAppSelector } from "./redux"

export const useStatistic = () => {
  const { notes, category } = useAppSelector(state => state.notesReducer)
  const categoryKeys = notes.map(item => item.categoryKey)
  const uniqueKeys = categoryKeys.filter( 
    (key, index, arr) => arr.indexOf(key) === index
  )
  const statisticData = uniqueKeys.map((key) => {
    const itemCategory = category.find(cat => cat.value === key)
    return {
      categoryKey: key,
      categoryName: itemCategory?.desc,
      archived: notes.filter(note => note.categoryKey === key && note.isArchive).length,
      active: notes.filter(note => note.categoryKey === key && !note.isArchive).length,
    }
  })
  return statisticData
}