import DecimalFormat from 'decimal-format'
// Components
import { TableCell, TableCellProps, Typography } from '@mui/material'

export type DecimalColumnProps = {
  key: string | number
  name: string
  precision?: number
  prefix?: string
  suffix?: string
  align?: TableCellProps['align']
}

export type DecimalColumn = {
  key: string | number
  name: string
  precision: number
  prefix: string
  suffix: string
  align: TableCellProps['align']
  render: ({ row, column }: DecimalRendererProps) => JSX.Element
}

export const decimal = ({
  key,
  name,
  precision = 2,
  prefix = '',
  suffix = '',
  align = 'right',
}: DecimalColumnProps) => ({
  key,
  name,
  precision,
  prefix,
  suffix,
  align,
  render: ({ row, column }: DecimalRendererProps): JSX.Element =>
    DecimalRenderer({ row, column }),
})

export type DecimalRendererProps = {
  row: any
  column: DecimalColumn
}

const decimalPrecisionFormatter = (precision: number): DecimalFormat => {
  const decimals = new Array(precision).fill(0).join('')
  return new DecimalFormat('#,##0.' + decimals)
}

export const DecimalRenderer = ({
  row,
  column: { key, precision, prefix, suffix, align },
}: DecimalRendererProps) => {
  const dpf = decimalPrecisionFormatter(precision)
  return (
    <TableCell align={align}>
      <Typography variant="body2">
        {`${prefix}${dpf.format(row[key] || 0)}${suffix}`}
      </Typography>
    </TableCell>
  )
}
