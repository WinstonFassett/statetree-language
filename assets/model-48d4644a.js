import { gu as __decorate, gv as __param, D as Disposable, iY as MultiModelEditStackElement, aX as dispose, a4 as IModelService, a_ as ITextModelService, ba as IUndoRedoService, iZ as ReferenceCollection, a2 as URI, br as Schemas, i_ as TextResourceEditorModel, i$ as isResolvedTextEditorModel, j0 as TextFileEditorModel, aq as toDisposable, b1 as IInstantiationService, h4 as ITextFileService, he as IFileService, j1 as AsyncReferenceCollection, hz as IUriIdentityService, hh as SyncDescriptor } from "./theme-defaults-1df7f429.js";
import "./index-3bddf13b.js";
let ModelUndoRedoParticipant = class ModelUndoRedoParticipant2 extends Disposable {
  constructor(_modelService, _textModelService, _undoRedoService) {
    super();
    this._modelService = _modelService;
    this._textModelService = _textModelService;
    this._undoRedoService = _undoRedoService;
    this._register(this._modelService.onModelRemoved((model) => {
      const elements = this._undoRedoService.getElements(model.uri);
      if (elements.past.length === 0 && elements.future.length === 0) {
        return;
      }
      for (const element of elements.past) {
        if (element instanceof MultiModelEditStackElement) {
          element.setDelegate(this);
        }
      }
      for (const element of elements.future) {
        if (element instanceof MultiModelEditStackElement) {
          element.setDelegate(this);
        }
      }
    }));
  }
  prepareUndoRedo(element) {
    const missingModels = element.getMissingModels();
    if (missingModels.length === 0) {
      return Disposable.None;
    }
    const disposablesPromises = missingModels.map(async (uri) => {
      try {
        const reference = await this._textModelService.createModelReference(uri);
        return reference;
      } catch (err) {
        return Disposable.None;
      }
    });
    return Promise.all(disposablesPromises).then((disposables) => {
      return {
        dispose: () => dispose(disposables)
      };
    });
  }
};
ModelUndoRedoParticipant = __decorate([
  __param(0, IModelService),
  __param(1, ITextModelService),
  __param(2, IUndoRedoService)
], ModelUndoRedoParticipant);
let ResourceModelCollection = class ResourceModelCollection2 extends ReferenceCollection {
  constructor(instantiationService, textFileService, fileService, modelService) {
    super();
    this.instantiationService = instantiationService;
    this.textFileService = textFileService;
    this.fileService = fileService;
    this.modelService = modelService;
    this.providers = /* @__PURE__ */ new Map();
    this.modelsToDispose = /* @__PURE__ */ new Set();
  }
  createReferencedObject(key) {
    return this.doCreateReferencedObject(key);
  }
  async doCreateReferencedObject(key, skipActivateProvider) {
    this.modelsToDispose.delete(key);
    const resource = URI.parse(key);
    if (resource.scheme === Schemas.inMemory) {
      const cachedModel = this.modelService.getModel(resource);
      if (!cachedModel) {
        throw new Error(`Unable to resolve inMemory resource ${key}`);
      }
      const model = this.instantiationService.createInstance(TextResourceEditorModel, resource);
      if (this.ensureResolvedModel(model, key)) {
        return model;
      }
    }
    if (resource.scheme === Schemas.untitled) {
      const model = await this.textFileService.untitled.resolve({ untitledResource: resource });
      if (this.ensureResolvedModel(model, key)) {
        return model;
      }
    }
    if (this.fileService.hasProvider(resource)) {
      const model = await this.textFileService.files.resolve(resource, { reason: 2 });
      if (this.ensureResolvedModel(model, key)) {
        return model;
      }
    }
    if (this.providers.has(resource.scheme)) {
      await this.resolveTextModelContent(key);
      const model = this.instantiationService.createInstance(TextResourceEditorModel, resource);
      if (this.ensureResolvedModel(model, key)) {
        return model;
      }
    }
    if (!skipActivateProvider) {
      await this.fileService.activateProvider(resource.scheme);
      return this.doCreateReferencedObject(key, true);
    }
    throw new Error(`Unable to resolve resource ${key}`);
  }
  ensureResolvedModel(model, key) {
    if (isResolvedTextEditorModel(model)) {
      return true;
    }
    throw new Error(`Unable to resolve resource ${key}`);
  }
  destroyReferencedObject(key, modelPromise) {
    const resource = URI.parse(key);
    if (resource.scheme === Schemas.untitled || resource.scheme === Schemas.inMemory) {
      return;
    }
    this.modelsToDispose.add(key);
    (async () => {
      try {
        const model = await modelPromise;
        if (!this.modelsToDispose.has(key)) {
          return;
        }
        if (model instanceof TextFileEditorModel) {
          await this.textFileService.files.canDispose(model);
        }
        if (!this.modelsToDispose.has(key)) {
          return;
        }
        model.dispose();
      } catch (error) {
      } finally {
        this.modelsToDispose.delete(key);
      }
    })();
  }
  registerTextModelContentProvider(scheme, provider) {
    let providers = this.providers.get(scheme);
    if (!providers) {
      providers = [];
      this.providers.set(scheme, providers);
    }
    providers.unshift(provider);
    return toDisposable(() => {
      const providersForScheme = this.providers.get(scheme);
      if (!providersForScheme) {
        return;
      }
      const index = providersForScheme.indexOf(provider);
      if (index === -1) {
        return;
      }
      providersForScheme.splice(index, 1);
      if (providersForScheme.length === 0) {
        this.providers.delete(scheme);
      }
    });
  }
  hasTextModelContentProvider(scheme) {
    return this.providers.get(scheme) !== void 0;
  }
  async resolveTextModelContent(key) {
    const resource = URI.parse(key);
    const providersForScheme = this.providers.get(resource.scheme) || [];
    for (const provider of providersForScheme) {
      const value = await provider.provideTextContent(resource);
      if (value) {
        return value;
      }
    }
    throw new Error(`Unable to resolve text model content for resource ${key}`);
  }
};
ResourceModelCollection = __decorate([
  __param(0, IInstantiationService),
  __param(1, ITextFileService),
  __param(2, IFileService),
  __param(3, IModelService)
], ResourceModelCollection);
let TextModelResolverService = class TextModelResolverService2 extends Disposable {
  get resourceModelCollection() {
    if (!this._resourceModelCollection) {
      this._resourceModelCollection = this.instantiationService.createInstance(ResourceModelCollection);
    }
    return this._resourceModelCollection;
  }
  get asyncModelCollection() {
    if (!this._asyncModelCollection) {
      this._asyncModelCollection = new AsyncReferenceCollection(this.resourceModelCollection);
    }
    return this._asyncModelCollection;
  }
  constructor(instantiationService, fileService, undoRedoService, modelService, uriIdentityService) {
    super();
    this.instantiationService = instantiationService;
    this.fileService = fileService;
    this.undoRedoService = undoRedoService;
    this.modelService = modelService;
    this.uriIdentityService = uriIdentityService;
    this._resourceModelCollection = void 0;
    this._asyncModelCollection = void 0;
    this._register(new ModelUndoRedoParticipant(this.modelService, this, this.undoRedoService));
  }
  async createModelReference(resource) {
    resource = this.uriIdentityService.asCanonicalUri(resource);
    return await this.asyncModelCollection.acquire(resource.toString());
  }
  registerTextModelContentProvider(scheme, provider) {
    return this.resourceModelCollection.registerTextModelContentProvider(scheme, provider);
  }
  canHandleResource(resource) {
    if (this.fileService.hasProvider(resource) || resource.scheme === Schemas.untitled || resource.scheme === Schemas.inMemory) {
      return true;
    }
    return this.resourceModelCollection.hasTextModelContentProvider(resource.scheme);
  }
};
TextModelResolverService = __decorate([
  __param(0, IInstantiationService),
  __param(1, IFileService),
  __param(2, IUndoRedoService),
  __param(3, IModelService),
  __param(4, IUriIdentityService)
], TextModelResolverService);
function getServiceOverride() {
  return {
    [ITextModelService.toString()]: new SyncDescriptor(TextModelResolverService, void 0, true)
  };
}
export {
  getServiceOverride as default
};
