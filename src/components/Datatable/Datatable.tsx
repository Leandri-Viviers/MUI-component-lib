// Components
import { Table, TableContainer } from '@mui/material'
import Head from './Head'
import Body from './Body'
// Types
import { Column } from '../Renderers/types'

export interface IDatatableProps {
  rows: Array<any>
  columns: Array<Column>
}

const Datatable = ({ rows = [], columns }: IDatatableProps) => (
  <TableContainer>
    <Table>
      <Head columns={columns} />
      <Body rows={rows} columns={columns} />
    </Table>
  </TableContainer>
)

export default Datatable
