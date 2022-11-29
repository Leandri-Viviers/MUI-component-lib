import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Paper } from '@mui/material'
import Datatable from './Datatable'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MUI-component-lib/Datatable',
  component: Datatable,
} as ComponentMeta<typeof Datatable>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Datatable> = (args) => (
  <Paper>
    <Datatable {...args} />
  </Paper>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  rows: [
    { id: 1, name: 'Freedom Chair', comfort: 1, price: 25 },
    { id: 2, name: 'Aquaqu Inflatable Fun Chair', comfort: 1, price: 50 },
    { id: 3, name: 'Magenti Inflatable Fun Chair', comfort: 1, price: 50 },
    { id: 4, name: 'Biome Inflatable Fun Chair', comfort: 1, price: 50 },
    { id: 5, name: 'Werkbunnst All Purpose Chair', comfort: 2, price: 80 },
    { id: 6, name: 'Neverfold Camp Chair', comfort: 2, price: 80 },
    { id: 7, name: 'Patio Dining Chair', comfort: 2, price: 100 },
    { id: 8, name: 'Deck Chair by Survivall', comfort: 2, price: 150 },
    { id: 9, name: 'RustyRedneck Barrel Chair', comfort: 2, price: 160 },
    {
      id: 10,
      name: 'Satinistics Reproduction Armchair',
      comfort: 2,
      price: 160,
    },
  ],
  columns: [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'comfort',
      label: 'Comfort',
      type: 'number',
    },
    {
      key: 'price',
      label: 'Price',
      type: 'decimal',
    },
  ],
}

export const Dates = Template.bind({})
Dates.args = {
  rows: [
    {
      id: 1,
      name: 'Dennis',
      surname: 'Ritchie',
      createdDate: '2022-01-31T12:00:00',
      deleted: true,
    },
    {
      id: 2,
      name: 'Bjarne',
      surname: 'Stroustrup',
      createdDate: '2022-02-28T13:05:00',
      deleted: true,
    },
    {
      id: 3,
      name: 'James',
      surname: 'Gosling',
      createdDate: '2022-03-31T14:10:00',
      deleted: false,
    },
    {
      id: 4,
      name: 'Linus',
      surname: 'Torvalds',
      createdDate: '2022-04-30T15:15:00',
      deleted: false,
    },
    {
      id: 5,
      name: 'Anders',
      surname: 'Hejlsberg',
      createdDate: '2022-05-31T16:00:00',
      deleted: true,
    },
  ],
  columns: [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'name',
      label: 'First Name',
    },
    {
      key: 'surname',
      label: 'Last Name',
    },
    {
      key: 'fullname',
      label: 'Full Name',
      formatter: ({ row }) => `${row.name} ${row.surname}`,
    },
    {
      key: 'createdDate',
      label: 'Date Created',
      type: 'date',
    },
    {
      key: 'createdDate',
      label: 'Time Created',
      type: 'date',
      format: 'HH:mm',
    },
    {
      key: 'deleted',
      label: 'Deleted',
      type: 'bool',
    },
  ],
}
