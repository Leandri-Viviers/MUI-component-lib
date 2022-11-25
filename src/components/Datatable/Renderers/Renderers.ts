import { TextRenderer } from "./TextRenderer";
import { NumberRenderer } from "./NumberRenderer";

const rendererTypes = {
  text: "text",
  number: "number",
};

export default {
  [rendererTypes.text]: TextRenderer,
  [rendererTypes.number]: NumberRenderer,
};
