import { format } from 'date-fns'
// Components
import { TableCell, TableCellProps, Typography } from '@mui/material'

interface IFormatProps {
  value: string
  dateFormat: string
}

const formatDate = ({ value, dateFormat }: IFormatProps) => {
  return value ? format(new Date(value), dateFormat) : ''
}

export type DateColumnProps = {
  key: string | number
  name: string
  align?: TableCellProps['align']
  format?: string
}

export type DateColumn = {
  key: string | number
  name: string
  format: string
  align: TableCellProps['align']
  render: ({ row, column }: DateRendererProps) => JSX.Element
}

export const date = ({
  key,
  name,
  format,
  align,
}: DateColumnProps): DateColumn => ({
  key,
  name,
  format: format || 'yyyy/MM/dd',
  align: align || 'left',
  render: ({ row, column }: DateRendererProps): JSX.Element =>
    DateRenderer({ row, column }),
})

export type DateRendererProps = { row: any; column: DateColumn }

export const DateRenderer = ({
  row,
  column: { key, format: dateFormat },
}: DateRendererProps) => (
  <TableCell>
    <Typography variant="body2">
      {formatDate({ value: row[key], dateFormat })}
    </Typography>
  </TableCell>
)
