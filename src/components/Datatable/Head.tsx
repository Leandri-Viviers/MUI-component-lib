// Components
import { TableHead, TableRow, TableCell } from '@mui/material'
// Types
import { Column } from './Renderers/types'

interface DatatableHeadProps {
  columns: Array<Column>
}

const Head = ({ columns }: DatatableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index} align={column.align}>
            {column.name || ''}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default Head
