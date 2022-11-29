import React from 'react'
// Components
import { Table, TableContainer } from '@mui/material'
import Head from './Head'
import Body from './Body'
// Types
import { IColumn } from './Renderers/types'
import { ITextColumn } from './Renderers/TextRenderer'
import { IDecimalColumn } from './Renderers/DecimalRenderer'
import { IDateColumn } from './Renderers/DateRenderer'

export interface IDatatableProps {
  rows: Array<any>
  columns: Array<IColumn | ITextColumn | IDecimalColumn | IDateColumn>
}

const DataTable = ({ rows = [], columns }: IDatatableProps) => (
  <TableContainer>
    <Table>
      <Head columns={columns} />
      <Body rows={rows} columns={columns} />
    </Table>
  </TableContainer>
)

export default DataTable
