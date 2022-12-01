import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Components
import { Paper } from '@mui/material'
import Datatable from './Datatable'
import { date } from './Renderers/DateRenderer'
import { text } from './Renderers/TextRenderer'
import { Column } from './Renderers/types'

interface IRow {
  id: number
  name: string
  lastname: string
  createdDate: string
  isAdmin: boolean
}

const rows: Array<IRow> = [
  {
    id: 1,
    name: 'Dennis',
    lastname: 'Ritchie',
    createdDate: '2022-01-31T12:00:00',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Bjarne',
    lastname: 'Stroustrup',
    createdDate: '2022-02-28T13:05:00',
    isAdmin: true,
  },
  {
    id: 3,
    name: 'James',
    lastname: 'Gosling',
    createdDate: '2022-03-31T14:10:00',
    isAdmin: false,
  },
  {
    id: 4,
    name: 'Linus',
    lastname: 'Torvalds',
    createdDate: '2022-04-30T15:15:00',
    isAdmin: false,
  },
  {
    id: 5,
    name: 'Anders',
    lastname: 'Hejlsberg',
    createdDate: '2022-05-31T16:00:00',
    isAdmin: true,
  },
]

// export const Default = () => {
//   const columns = [
//     {
//       key: 'id',
//       name: 'ID',
//     } as ITextColumn,
//     {
//       key: 'name',
//       name: 'First Name',
//     } as ITextColumn,
//     {
//       key: 'surname',
//       name: 'Last Name',
//     } as ITextColumn,
//     {
//       key: 'fullname',
//       name: 'Full Name',
//       formatter: ({ row }: { row: any }) => `${row.name} ${row.surname}`,
//     } as ITextColumn,
//     {
//       key: 'createdDate',
//       name: 'Date Created',
//       type: 'date',
//     } as IDateColumn,
//     {
//       key: 'createdDate',
//       name: 'Last Online',
//       type: 'date',
//       format: 'HH:mm',
//     } as IDateColumn,
//     {
//       key: 'isAdmin',
//       name: 'Admin',
//       type: 'bool',
//     } as IBoolColumn,
//     {
//       key: 'view',
//       type: 'button',
//       label: 'View',
//       onClick: (row: any) => row.id,
//     } as IButtonColumn,
//   ]

//   return (
//     <Paper>
//       <Datatable rows={rows} columns={columns}></Datatable>
//     </Paper>
//   )
// }

export const Typescript = () => {
  const columns = [
    text({ key: 'id', name: 'ID' }),
    text({ key: 'name', name: 'First Name' }),
    text({ key: 'lastname', name: 'Last Name' }),
    text({
      key: 'fullname',
      name: 'Full Name',
      formatter: (row) => `${row.name} ${row.lastname}`,
    }),
    date({ key: 'createdDate', name: 'Date Created' }),
  ]

  return (
    <Paper>
      <Datatable rows={rows} columns={columns}></Datatable>
    </Paper>
  )
}
