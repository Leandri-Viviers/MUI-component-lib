import { TextColumn } from './TextRenderer'
import { NumberColumn } from './NumberRenderer'
import { DecimalColumn } from './DecimalRenderer'
import { DateColumn } from './DateRenderer'
import { BoolColumn } from './BooleanRenderer'
import { CustomColumn } from './CustomRenderer'

export type Column =
  | TextColumn
  | NumberColumn
  | DecimalColumn
  | DateColumn
  | BoolColumn
  | CustomColumn
