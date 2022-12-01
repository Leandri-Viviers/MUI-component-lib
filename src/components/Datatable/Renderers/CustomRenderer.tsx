// Components
import { TableCell } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

export interface ICustomColumn extends IColumn {
  renderer: (...args: any[]) => any
}

export interface ICustomRendererProps extends IRendererProps {
  column: ICustomColumn
}

export const CustomRenderer = ({
  row,
  column: { renderer },
}: ICustomRendererProps) => <TableCell>{renderer({ row })}</TableCell>
