import React from 'react'
import DecimalFormat from 'decimal-format'
// Components
import { TableCell, Typography } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

export interface IDecimalColumn extends IColumn {
  precision: number
}

export interface IDecimalRendererProps extends IRendererProps {
  column: IDecimalColumn
}

const decimalPrecisionFormatter = (precision: number): DecimalFormat => {
  const decimals = new Array(precision).fill(0).join('')
  return new DecimalFormat('#,##0.' + decimals)
}

export const DecimalRenderer = ({
  row,
  column: { key, precision = 2 },
}: IDecimalRendererProps) => {
  const dpf = decimalPrecisionFormatter(precision)
  return (
    <TableCell>
      <Typography variant="body2" align="right">
        {dpf.format(row[key] || 0)}
      </Typography>
    </TableCell>
  )
}
