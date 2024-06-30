import { aL as registerIcon, c as localize, aM as Codicon, aK as ThemeIcon } from "./theme-defaults-1df7f429.js";
registerIcon("extensions-view-icon", Codicon.extensions, localize("extensionsViewIcon", "View icon of the extensions view."));
const manageExtensionIcon = registerIcon("extensions-manage", Codicon.gear, localize(
  "manageExtensionIcon",
  "Icon for the 'Manage' action in the extensions view."
));
registerIcon("extensions-clear-search-results", Codicon.clearAll, localize(
  "clearSearchResultsIcon",
  "Icon for the 'Clear Search Result' action in the extensions view."
));
registerIcon("extensions-refresh", Codicon.refresh, localize("refreshIcon", "Icon for the 'Refresh' action in the extensions view."));
const filterIcon = registerIcon("extensions-filter", Codicon.filter, localize("filterIcon", "Icon for the 'Filter' action in the extensions view."));
registerIcon("extensions-install-local-in-remote", Codicon.cloudDownload, localize(
  "installLocalInRemoteIcon",
  "Icon for the 'Install Local Extension in Remote' action in the extensions view."
));
registerIcon("extensions-install-workspace-recommended", Codicon.cloudDownload, localize(
  "installWorkspaceRecommendedIcon",
  "Icon for the 'Install Workspace Recommended Extensions' action in the extensions view."
));
registerIcon("extensions-configure-recommended", Codicon.pencil, localize(
  "configureRecommendedIcon",
  "Icon for the 'Configure Recommended Extensions' action in the extensions view."
));
const syncEnabledIcon = registerIcon("extensions-sync-enabled", Codicon.sync, localize("syncEnabledIcon", "Icon to indicate that an extension is synced."));
const syncIgnoredIcon = registerIcon("extensions-sync-ignored", Codicon.syncIgnored, localize(
  "syncIgnoredIcon",
  "Icon to indicate that an extension is ignored when syncing."
));
registerIcon("extensions-remote", Codicon.remote, localize(
  "remoteIcon",
  "Icon to indicate that an extension is remote in the extensions view and editor."
));
registerIcon("extensions-install-count", Codicon.cloudDownload, localize(
  "installCountIcon",
  "Icon shown along with the install count in the extensions view and editor."
));
registerIcon("extensions-rating", Codicon.star, localize(
  "ratingIcon",
  "Icon shown along with the rating in the extensions view and editor."
));
registerIcon("extensions-verified-publisher", Codicon.verifiedFilled, localize(
  "verifiedPublisher",
  "Icon used for the verified extension publisher in the extensions view and editor."
));
const preReleaseIcon = registerIcon("extensions-pre-release", Codicon.versions, localize(
  "preReleaseIcon",
  "Icon shown for extensions having pre-release versions in extensions view and editor."
));
registerIcon("extensions-sponsor", Codicon.heartFilled, localize(
  "sponsorIcon",
  "Icon used for sponsoring extensions in the extensions view and editor."
));
registerIcon("extensions-star-full", Codicon.starFull, localize(
  "starFullIcon",
  "Full star icon used for the rating in the extensions editor."
));
registerIcon("extensions-star-half", Codicon.starHalf, localize(
  "starHalfIcon",
  "Half star icon used for the rating in the extensions editor."
));
registerIcon("extensions-star-empty", Codicon.starEmpty, localize(
  "starEmptyIcon",
  "Empty star icon used for the rating in the extensions editor."
));
const errorIcon = registerIcon("extensions-error-message", Codicon.error, localize("errorIcon", "Icon shown with a error message in the extensions editor."));
const warningIcon = registerIcon("extensions-warning-message", Codicon.warning, localize(
  "warningIcon",
  "Icon shown with a warning message in the extensions editor."
));
const infoIcon = registerIcon("extensions-info-message", Codicon.info, localize("infoIcon", "Icon shown with an info message in the extensions editor."));
const trustIcon = registerIcon("extension-workspace-trust", Codicon.shield, localize(
  "trustIcon",
  "Icon shown with a workspace trust message in the extension editor."
));
registerIcon("extension-activation-time", Codicon.history, localize(
  "activationtimeIcon",
  "Icon shown with a activation time message in the extension editor."
));
const pinButtonClass = ThemeIcon.asClassName(Codicon.pin);
const pinnedButtonClass = ThemeIcon.asClassName(Codicon.pinned);
const buttonClasses = [pinButtonClass, pinnedButtonClass];
async function showWithPinnedItems(storageService, storageKey, quickPick, filterDuplicates) {
  const itemsWithoutPinned = quickPick.items;
  let itemsWithPinned = _formatPinnedItems(storageKey, quickPick, storageService, void 0, filterDuplicates);
  quickPick.onDidTriggerItemButton(async (buttonEvent) => {
    const expectedButton = buttonEvent.button.iconClass && buttonClasses.includes(buttonEvent.button.iconClass);
    if (expectedButton) {
      quickPick.items = itemsWithoutPinned;
      itemsWithPinned = _formatPinnedItems(storageKey, quickPick, storageService, buttonEvent.item, filterDuplicates);
      quickPick.items = quickPick.value ? itemsWithoutPinned : itemsWithPinned;
    }
  });
  quickPick.onDidChangeValue(async (value) => {
    if (quickPick.items === itemsWithPinned && value) {
      quickPick.items = itemsWithoutPinned;
    } else if (quickPick.items === itemsWithoutPinned && !value) {
      quickPick.items = itemsWithPinned;
    }
  });
  quickPick.items = quickPick.value ? itemsWithoutPinned : itemsWithPinned;
  quickPick.show();
}
function _formatPinnedItems(storageKey, quickPick, storageService, changedItem, filterDuplicates) {
  const formattedItems = [];
  let pinnedItems;
  if (changedItem) {
    pinnedItems = updatePinnedItems(storageKey, changedItem, storageService);
  } else {
    pinnedItems = getPinnedItems(storageKey, storageService);
  }
  if (pinnedItems.length) {
    formattedItems.push({ type: "separator", label: localize("terminal.commands.pinned", "pinned") });
  }
  const pinnedIds = /* @__PURE__ */ new Set();
  for (const itemToFind of pinnedItems) {
    const itemToPin = quickPick.items.find((item) => itemsMatch(item, itemToFind));
    if (itemToPin) {
      const pinnedItemId = getItemIdentifier(itemToPin);
      const pinnedItem = Object.assign({}, itemToPin);
      if (!filterDuplicates || !pinnedIds.has(pinnedItemId)) {
        pinnedIds.add(pinnedItemId);
        updateButtons(pinnedItem, false);
        formattedItems.push(pinnedItem);
      }
    }
  }
  for (const item of quickPick.items) {
    updateButtons(item, true);
    formattedItems.push(item);
  }
  return formattedItems;
}
function getItemIdentifier(item) {
  return item.type === "separator" ? "" : item.id || `${item.label}${item.description}${item.detail}}`;
}
function updateButtons(item, removePin) {
  var _a;
  if (item.type === "separator") {
    return;
  }
  const newButtons = ((_a = item.buttons) == null ? void 0 : _a.filter((button) => button.iconClass && !buttonClasses.includes(button.iconClass))) ?? [];
  newButtons.unshift({
    iconClass: removePin ? pinButtonClass : pinnedButtonClass,
    tooltip: removePin ? localize("pinCommand", "Pin command") : localize("pinnedCommand", "Pinned command"),
    alwaysVisible: false
  });
  item.buttons = newButtons;
}
function itemsMatch(itemA, itemB) {
  return getItemIdentifier(itemA) === getItemIdentifier(itemB);
}
function updatePinnedItems(storageKey, changedItem, storageService) {
  var _a;
  const removePin = (_a = changedItem.buttons) == null ? void 0 : _a.find((b) => b.iconClass === pinnedButtonClass);
  let items = getPinnedItems(storageKey, storageService);
  if (removePin) {
    items = items.filter((item) => getItemIdentifier(item) !== getItemIdentifier(changedItem));
  } else {
    items.push(changedItem);
  }
  storageService.store(storageKey, JSON.stringify(items), 1, 1);
  return items;
}
function getPinnedItems(storageKey, storageService) {
  const items = storageService.get(storageKey, 1);
  return items ? JSON.parse(items) : [];
}
export {
  syncEnabledIcon as a,
  showWithPinnedItems as b,
  errorIcon as e,
  filterIcon as f,
  infoIcon as i,
  manageExtensionIcon as m,
  preReleaseIcon as p,
  syncIgnoredIcon as s,
  trustIcon as t,
  warningIcon as w
};
