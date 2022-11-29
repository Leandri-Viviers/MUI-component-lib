import { rendererTypes } from './Renderers'

export interface IColumn {
  key: string
  label?: string
  type?: keyof typeof rendererTypes
}

export interface IRendererProps {
  row: any
  column: IColumn
}
