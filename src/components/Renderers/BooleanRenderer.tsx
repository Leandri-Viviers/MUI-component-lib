// Components
import { TableCell, TableCellProps, Typography } from '@mui/material'

export type BoolColumnProps = {
  key: string | number
  name: string
  trueLabel?: string
  falseLabel?: string
  align?: TableCellProps['align']
}

export type BoolColumn = {
  key: string | number
  name: string
  trueLabel?: string
  falseLabel?: string
  align: TableCellProps['align']
  render: ({ row, column }: BoolRendererProps) => JSX.Element
}

export const bool = ({
  key,
  name,
  trueLabel = 'Yes',
  falseLabel = 'No',
  align = 'left',
}: BoolColumnProps) => ({
  key,
  name,
  trueLabel,
  falseLabel,
  align,
  render: ({ row, column }: BoolRendererProps): JSX.Element =>
    BoolRenderer({ row, column }),
})

export type BoolRendererProps = { row: any; column: BoolColumn }

export const BoolRenderer = ({
  row,
  column: { key, trueLabel, falseLabel, align },
}: BoolRendererProps) => (
  <TableCell align={align}>
    <Typography variant="body2">{row[key] ? trueLabel : falseLabel}</Typography>
  </TableCell>
)
