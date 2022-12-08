// Components
import { TableCell, TableCellProps, Typography } from '@mui/material'

export type NumberColumnProps = {
  key: string | number
  name: string
  align?: TableCellProps['align']
}

export type NumberColumn = {
  key: string | number
  name: string
  align?: TableCellProps['align']
  render: ({ row, column }: NumberRendererProps) => JSX.Element
}

export const number = ({ key, name, align = 'right' }: NumberColumnProps) => ({
  key,
  name,
  align,
  render: ({ row, column }: NumberRendererProps): JSX.Element =>
    NumberRenderer({ row, column }),
})

export type NumberRendererProps = {
  row: any
  column: NumberColumn
}

export const NumberRenderer = ({ row, column: { key, align } }: any) => (
  <TableCell>
    <Typography variant="body2" align={align}>
      {parseInt(row[key]) || 0}
    </Typography>
  </TableCell>
)
