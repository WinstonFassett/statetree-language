const _KeyboardLayoutContribution = class _KeyboardLayoutContribution {
  get layoutInfos() {
    return this._layoutInfos;
  }
  constructor() {
    this._layoutInfos = [];
  }
  registerKeyboardLayout(layout) {
    this._layoutInfos.push(layout);
  }
};
_KeyboardLayoutContribution.INSTANCE = new _KeyboardLayoutContribution();
let KeyboardLayoutContribution = _KeyboardLayoutContribution;
export {
  KeyboardLayoutContribution as K
};
