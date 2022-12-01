// Components
import { TableCell, Typography } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

export interface IBoolColumn extends IColumn {
  trueLabel?: string
  falseLabel?: string
}

export interface IBoolRendererProps extends IRendererProps {
  column: IBoolColumn
}

export const BooleanRenderer = ({
  row,
  column: { key, trueLabel = 'Yes', falseLabel = 'No' },
}: IBoolRendererProps) => (
  <TableCell>
    <Typography variant="body2">{row[key] ? trueLabel : falseLabel}</Typography>
  </TableCell>
)
