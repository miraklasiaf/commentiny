import { TableContainer, Table, Tr, Th } from '../table-components'
import CommentRow from './comment-row'

const CommentTable = ({ comment }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th minW="150px">Name</Th>
            <Th>Comment</Th>
            <Th>Route</Th>
            <Th>Visible</Th>
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {comment.map((comment) => (
            <CommentRow key={comment.id} {...comment} />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default CommentTable
