import React from 'react'
import { format } from 'date-fns'
// Components
import { TableCell, Typography } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

interface IFormatProps {
  value: string
  dateFormat: string
}

const formatDate = ({ value, dateFormat }: IFormatProps) => {
  return value ? format(new Date(value), dateFormat || 'yyyy/MM/dd') : ''
}

export interface IDateColumn extends IColumn {
  format: string
}

export interface IDateRendererProps extends IRendererProps {
  column: IDateColumn
}

export const DateRenderer = ({
  row,
  column: { key, format: dateFormat },
}: IDateRendererProps) => (
  <TableCell>
    <Typography variant="body2">
      {formatDate({ value: row[key], dateFormat })}
    </Typography>
  </TableCell>
)
