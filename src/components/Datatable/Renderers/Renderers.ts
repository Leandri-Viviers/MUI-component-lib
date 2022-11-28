import { TextRenderer } from "./TextRenderer";
import { NumberRenderer } from "./NumberRenderer";
import { DecimalRenderer } from "./DecimalRenderer";

const rendererTypes = {
  text: "text",
  number: "number",
  decimal: "decimal",
};

export default {
  [rendererTypes.text]: TextRenderer,
  [rendererTypes.number]: NumberRenderer,
  [rendererTypes.decimal]: DecimalRenderer,
};
