// Components
import { TableCell, Typography } from '@mui/material'

export type BoolColumnProps = {
  key: string | number
  name: string
  trueLabel?: string
  falseLabel?: string
}

export type BoolColumn = {
  key: string | number
  name: string
  trueLabel?: string
  falseLabel?: string
  render: ({ row, column }: BoolRendererProps) => JSX.Element
}

export const bool = ({
  key,
  name,
  trueLabel = 'Yes',
  falseLabel = 'No',
}: BoolColumnProps) => ({
  key,
  name,
  trueLabel,
  falseLabel,
  render: ({ row, column }: BoolRendererProps): JSX.Element =>
    BoolRenderer({ row, column }),
})

export type BoolRendererProps = { row: any; column: BoolColumn }

export const BoolRenderer = ({
  row,
  column: { key, trueLabel, falseLabel },
}: BoolRendererProps) => (
  <TableCell>
    <Typography variant="body2">{row[key] ? trueLabel : falseLabel}</Typography>
  </TableCell>
)
