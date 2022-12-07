import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Components
import { Paper } from '@mui/material'
import Datatable from './Datatable'
import { text, number, date, bool, decimal, custom } from './Renderers'

interface IRow {
  id: number
  name: string
  lastname: string
  createdDate: string
  isAdmin: boolean
  level: number
  salary: number
}

const rows: Array<IRow> = [
  {
    id: 1,
    name: 'Dennis',
    lastname: 'Ritchie',
    createdDate: '2022-01-31T12:00:00',
    isAdmin: false,
    level: 2,
    salary: 30000,
  },
  {
    id: 2,
    name: 'Bjarne',
    lastname: 'Stroustrup',
    createdDate: '2022-02-28T13:05:00',
    isAdmin: false,
    level: 4,
    salary: 60000,
  },
  {
    id: 3,
    name: 'James',
    lastname: 'Gosling',
    createdDate: '2022-03-31T14:10:00',
    isAdmin: true,
    level: 6,
    salary: 70000,
  },
  {
    id: 4,
    name: 'Linus',
    lastname: 'Torvalds',
    createdDate: '2022-04-30T15:15:00',
    isAdmin: true,
    level: 5,
    salary: 65000,
  },
  {
    id: 5,
    name: 'Anders',
    lastname: 'Hejlsberg',
    createdDate: '2022-05-31T16:00:00',
    isAdmin: true,
    level: 3,
    salary: 45000,
  },
]

// export const Default = () => {
//   const columns = [
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
    date({ key: 'createdDate', name: 'Date Created', format: 'yyyy-MM' }),
    bool({ key: 'isAdmin', name: 'Admin' }),
    number({ key: 'level', name: 'Level' }),
    decimal({ key: 'salary', name: 'Salary', prefix: '$' }),
  ]

  return (
    <Paper>
      <Datatable rows={rows} columns={columns}></Datatable>
    </Paper>
  )
}

export const TextExample = () => {
  const rows = [
    { id: 1, firstname: 'Olivia', lastname: 'Thompson' },
    { id: 2, firstname: 'Emma', lastname: 'Jones' },
    { id: 3, firstname: 'Stephen', lastname: 'Roberts' },
  ]

  const columns = [
    text({ key: 'id', name: 'ID' }),
    text({ key: 'firstname', name: 'First Name' }),
    text({ key: 'lastname', name: 'Last Name' }),
    text({
      key: 'fullname',
      name: 'Full Name',
      formatter: (row) => `${row.firstname} ${row.lastname}`,
      align: 'justify',
    }),
  ]

  return (
    <Paper>
      <Datatable rows={rows} columns={columns}></Datatable>
    </Paper>
  )
}
