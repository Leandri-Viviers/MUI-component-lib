// Components
import { TableCell } from '@mui/material'

export type CustomColumnProps = {
  name: string
  renderer: ({ row }: any) => any
}

export type CustomColumn = {
  name: string
  render: ({ row, column }: CustomRendererProps) => JSX.Element
  renderer: ({ row }: any) => any
}

export const custom = ({ name, renderer }: CustomColumnProps) => ({
  name,
  renderer,
  render: ({ row, column }: CustomRendererProps): JSX.Element =>
    CustomRenderer({ row, column }),
})

export type CustomRendererProps = {
  row: any
  column: CustomColumn
}

export const CustomRenderer = ({
  row,
  column: { renderer },
}: CustomRendererProps) => renderer({ row })
