import { vG as LanguageConfigurationFileHandler, gu as __decorate, gv as __param, Z as Registry, h1 as Extensions, iQ as getServiceOverride$1, bb as ILanguageService, hh as SyncDescriptor, vH as WorkbenchLanguageService, b1 as IInstantiationService } from "./theme-defaults-1df7f429.js";
import "./index-3bddf13b.js";
let ExtensionPoints = class ExtensionPoints2 {
  constructor(instantiationService) {
    this.instantiationService = instantiationService;
    this.instantiationService.createInstance(LanguageConfigurationFileHandler);
  }
};
ExtensionPoints = __decorate([
  __param(0, IInstantiationService)
], ExtensionPoints);
Registry.as(Extensions.Workbench).registerWorkbenchContribution(ExtensionPoints, 1);
function getServiceOverride() {
  return {
    ...getServiceOverride$1(),
    [ILanguageService.toString()]: new SyncDescriptor(WorkbenchLanguageService, [], false)
  };
}
export {
  ExtensionPoints,
  getServiceOverride as default
};
