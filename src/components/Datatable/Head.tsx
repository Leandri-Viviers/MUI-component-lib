import React from 'react'
import { includes } from 'ramda'
// Components
import { TableHead, TableRow, TableCell } from '@mui/material'
// Types
import { IColumn } from './Renderers/types'

interface DatatableHeadProps {
  columns: Array<IColumn>
}

const numberTypes = ['number', 'decimal']

const Head = ({ columns }: DatatableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(({ label, type }, index) => (
          <TableCell
            key={index}
            align={includes(type, numberTypes) ? 'right' : 'left'}
          >
            {label || ''}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default Head
