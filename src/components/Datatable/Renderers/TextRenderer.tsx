import React from 'react'
// Components
import { TableCell, Typography } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

export interface ITextColumn extends IColumn {
  formatter?: ({ row }: any) => string
}

export interface ITextRendererProps extends IRendererProps {
  column: ITextColumn
}

export const TextRenderer = ({
  row,
  column: { key, formatter },
}: ITextRendererProps) => {
  const value = formatter ? formatter({ row }) : row[key]
  return (
    <TableCell>
      <Typography variant="body2">{value || ''}</Typography>
    </TableCell>
  )
}
