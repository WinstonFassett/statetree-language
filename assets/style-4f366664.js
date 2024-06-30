import { cL as registerThemingParticipant, m1 as WORKBENCH_BACKGROUND, yg as selectionBackground, w as isWeb, zE as TITLE_BAR_ACTIVE_BACKGROUND, zF as createMetaElement, m0 as isSafari, go as isIOS, vF as isStandalone, d2 as isWindows, aT as isMacintosh } from "./theme-defaults-1df7f429.js";
registerThemingParticipant((theme, collector) => {
  const workbenchBackground = WORKBENCH_BACKGROUND(theme);
  collector.addRule(`.monaco-workbench { background-color: ${workbenchBackground}; }`);
  const windowSelectionBackground = theme.getColor(selectionBackground);
  if (windowSelectionBackground) {
    collector.addRule(`.monaco-workbench ::selection { background-color: ${windowSelectionBackground}; }`);
  }
  if (isWeb) {
    const titleBackground = theme.getColor(TITLE_BAR_ACTIVE_BACKGROUND);
    if (titleBackground) {
      const metaElementId = "monaco-workbench-meta-theme-color";
      let metaElement = document.getElementById(metaElementId);
      if (!metaElement) {
        metaElement = createMetaElement();
        metaElement.name = "theme-color";
        metaElement.id = metaElementId;
      }
      metaElement.content = titleBackground.toString();
    }
  }
  if (isSafari) {
    collector.addRule(`
			body.web {
				touch-action: none;
			}
			.monaco-workbench .monaco-editor .view-lines {
				user-select: text;
				-webkit-user-select: text;
			}
		`);
  }
  if (isIOS && isStandalone()) {
    collector.addRule(`body { background-color: ${workbenchBackground}; }`);
  }
});
const DEFAULT_FONT_FAMILY = isWindows ? '"Segoe WPC", "Segoe UI", sans-serif' : isMacintosh ? "-apple-system, BlinkMacSystemFont, sans-serif" : 'system-ui, "Ubuntu", "Droid Sans", sans-serif';
export {
  DEFAULT_FONT_FAMILY as D
};
