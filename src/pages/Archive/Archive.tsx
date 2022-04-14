import Table from "../../components/Table"
import HeadNote from "../../components/HeadNote"
import ListArchive from "../../components/ListArchive"

const ArchiveNotes: React.FC = () => {
  return (
    <Table>
      <HeadNote />
      <ListArchive />
    </Table>
  )
}

export default ArchiveNotes