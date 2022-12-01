// Components
import { Button, ButtonProps, TableCell } from '@mui/material'
// Types
import { IColumn, IRendererProps } from './types'

export interface IButtonColumn
  extends IColumn,
    Omit<ButtonProps, 'key' | 'type' | 'onClick'> {
  onClick: (row: any) => any
  label: string
}

export interface IButtonRendererProps extends IRendererProps {
  column: IButtonColumn
}

export const ButtonRenderer = ({
  row,
  column: { type, onClick, label, ...props },
}: IButtonRendererProps) => (
  <TableCell>
    <Button
      {...props}
      variant={props.variant || 'text'}
      onClick={() => onClick(row)}
    >
      {label}
    </Button>
  </TableCell>
)
