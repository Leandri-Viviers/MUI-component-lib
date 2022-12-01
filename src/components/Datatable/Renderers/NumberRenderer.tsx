// Components
import { TableCell, Typography } from '@mui/material'
// Types
// import { IRendererProps } from './types'

export const NumberRenderer = ({ row, column: { key } }: any) => (
  <TableCell>
    <Typography variant="body2" align="right">
      {parseInt(row[key]) || 0}
    </Typography>
  </TableCell>
)
