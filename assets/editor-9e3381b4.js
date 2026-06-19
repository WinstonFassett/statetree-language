import { gu as __decorate, gv as __param, Z as Registry, m7 as EditorExtensions, nj as FILE_EDITOR_INPUT_ID, iS as unsupported, u as ICodeEditorService, hh as SyncDescriptor, gx as IEditorService, pO as ITextEditorService, r9 as TextEditorService, l3 as IEditorGroupsService, rq as EmptyEditorGroupsService, b1 as IInstantiationService } from "./theme-defaults-6acfdee0.js";
import { n as CodeEditorService, M as MonacoEditorService, o as MonacoDelegateEditorGroupsService } from "./editor-10a691c6.js";
import "./index-d904440d.js";
import "./simpleIconLabel-c39f8a5e.js";
import "./index-6864b97a.js";
let MonacoEditorGroupsService = class MonacoEditorGroupsService2 extends MonacoDelegateEditorGroupsService {
  constructor(instantiationService) {
    super(instantiationService.createInstance(EmptyEditorGroupsService), instantiationService);
  }
};
MonacoEditorGroupsService = __decorate([
  __param(0, IInstantiationService)
], MonacoEditorGroupsService);
Registry.as(EditorExtensions.EditorFactory).registerFileEditorFactory({
  typeId: FILE_EDITOR_INPUT_ID,
  createFileEditor: unsupported,
  isFileEditor: (obj) => false
});
function getServiceOverride(openEditor) {
  return {
    [ICodeEditorService.toString()]: new SyncDescriptor(CodeEditorService, void 0, true),
    [IEditorService.toString()]: new SyncDescriptor(MonacoEditorService, [openEditor, () => false], true),
    [ITextEditorService.toString()]: new SyncDescriptor(TextEditorService, [], false),
    [IEditorGroupsService.toString()]: new SyncDescriptor(MonacoEditorGroupsService)
  };
}
export {
  MonacoEditorService,
  getServiceOverride as default
};
