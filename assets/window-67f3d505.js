import { aT as isMacintosh, p as isNative, w as isWeb, dz as isLinux } from "./theme-defaults-1df7f429.js";
function isWorkspaceToOpen(uriToOpen) {
  return !!uriToOpen.workspaceUri;
}
function isFileToOpen(uriToOpen) {
  return !!uriToOpen.fileUri;
}
function getMenuBarVisibility(configurationService) {
  const titleBarStyle = getTitleBarStyle(configurationService);
  const menuBarVisibility = configurationService.getValue("window.menuBarVisibility");
  if (menuBarVisibility === "default" || titleBarStyle === "native" && menuBarVisibility === "compact" || isMacintosh && isNative) {
    return "classic";
  } else {
    return menuBarVisibility;
  }
}
function getTitleBarStyle(configurationService) {
  if (isWeb) {
    return "custom";
  }
  const configuration = configurationService.getValue("window");
  if (configuration) {
    const useNativeTabs = isMacintosh && configuration.nativeTabs === true;
    if (useNativeTabs) {
      return "native";
    }
    const useSimpleFullScreen = isMacintosh && configuration.nativeFullScreen === false;
    if (useSimpleFullScreen) {
      return "native";
    }
    const style = configuration.titleBarStyle;
    if (style === "native" || style === "custom") {
      return style;
    }
  }
  return isLinux ? "native" : "custom";
}
export {
  getTitleBarStyle as a,
  isFileToOpen as b,
  getMenuBarVisibility as g,
  isWorkspaceToOpen as i
};
