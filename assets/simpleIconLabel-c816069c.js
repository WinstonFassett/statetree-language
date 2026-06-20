import { ai as reset, ag as renderLabelWithIcons } from "./theme-defaults-a96cc0fe.js";
class SimpleIconLabel {
  constructor(_container) {
    this._container = _container;
  }
  set text(text) {
    reset(this._container, ...renderLabelWithIcons(text ?? ""));
  }
  set title(title) {
    this._container.title = title;
  }
}
export {
  SimpleIconLabel as S
};
