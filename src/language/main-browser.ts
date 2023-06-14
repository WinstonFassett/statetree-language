import { DocumentState, EmptyFileSystem, startLanguageServer } from 'langium';
import type { Diagnostic } from 'vscode-languageserver/browser';
import { BrowserMessageReader, BrowserMessageWriter, NotificationType, createConnection } from 'vscode-languageserver/browser';
import { createStatetreeServices } from './statetree-module';
declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared, Statetree } = createStatetreeServices({ connection, ...EmptyFileSystem });
console.log('starting language server!!')
startLanguageServer(shared);

// Send a notification with the serialized AST after every document change
type DocumentChange = { uri: string, content: string, diagnostics: Diagnostic[] };
const documentChangeNotification = new NotificationType<DocumentChange>('browser/DocumentChange');

const jsonSerializer = Statetree.serializer.JsonSerializer;
shared.workspace.DocumentBuilder.onBuildPhase(DocumentState.Validated, documents => {
    console.log('build phase!')
    for (const document of documents) {
        const json = jsonSerializer.serialize(document.parseResult.value);
        connection.sendNotification(documentChangeNotification, {
            uri: document.uri.toString(),
            content: json,
            diagnostics: document.diagnostics ?? []
        });
    }
});