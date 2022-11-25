import { Renderer } from "react-dom";

export interface IColumn {
  key: string;
  name?: string;
  type: string;
}

export interface IRendererProps {
  row: any;
  column: IColumn;
}
