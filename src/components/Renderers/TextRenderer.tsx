// Components
import { TableCell, TableCellProps, Typography } from '@mui/material'

export type TextColumnProps = {
  key: string | number
  name: string
  formatter?: ((...args: Array<any>) => any) | undefined
  align?: TableCellProps['align']
}

export type TextColumn = {
  key: string | number
  name: string
  formatter?: ((...args: Array<any>) => any) | undefined
  align?: TableCellProps['align']
  render: ({ row, column }: TextRendererProps) => JSX.Element
}

export const text = ({
  key,
  name,
  formatter,
  align,
}: TextColumnProps): TextColumn => ({
  key,
  name,
  formatter,
  align: align || 'left',
  render: ({ row, column }: TextRendererProps): JSX.Element =>
    TextRenderer({ row, column }),
})

export type TextRendererProps = {
  row: any
  column: TextColumn
}

export const TextRenderer = ({
  row,
  column: { key, formatter, align },
}: TextRendererProps): JSX.Element => {
  const value = formatter ? formatter(row) : row[key]
  return (
    <TableCell align={align}>
      <Typography variant="body2">{value || ''}</Typography>
    </TableCell>
  )
}
