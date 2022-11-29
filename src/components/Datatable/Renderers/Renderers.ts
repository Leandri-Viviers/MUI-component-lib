import { TextRenderer } from './TextRenderer'
import { NumberRenderer } from './NumberRenderer'
import { DecimalRenderer } from './DecimalRenderer'
import { DateRenderer } from './DateRenderer'
import { BooleanRenderer } from './BooleanRenderer'

export const rendererTypes = {
  text: 'text',
  number: 'number',
  decimal: 'decimal',
  date: 'date',
  bool: 'bool',
}

export default {
  [rendererTypes.text]: TextRenderer,
  [rendererTypes.number]: NumberRenderer,
  [rendererTypes.decimal]: DecimalRenderer,
  [rendererTypes.date]: DateRenderer,
  [rendererTypes.bool]: BooleanRenderer,
}
