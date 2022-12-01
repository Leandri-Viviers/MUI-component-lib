import { TextRenderer } from './TextRenderer'
import { NumberRenderer } from './NumberRenderer'
import { DecimalRenderer } from './DecimalRenderer'
import { DateRenderer } from './DateRenderer'
import { BooleanRenderer } from './BooleanRenderer'
import { CustomRenderer } from './CustomRenderer'
import { ButtonRenderer } from './ButtonRenderer'

export const rendererTypes = {
  text: 'text',
  number: 'number',
  decimal: 'decimal',
  date: 'date',
  bool: 'bool',
  button: 'button',
  custom: 'custom',
}

export default {
  [rendererTypes.text]: TextRenderer,
  [rendererTypes.number]: NumberRenderer,
  [rendererTypes.decimal]: DecimalRenderer,
  [rendererTypes.date]: DateRenderer,
  [rendererTypes.bool]: BooleanRenderer,
  [rendererTypes.button]: ButtonRenderer,
  [rendererTypes.custom]: CustomRenderer,
}
