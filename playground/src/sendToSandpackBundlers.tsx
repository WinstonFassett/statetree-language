import { SandpackState } from "@codesandbox/sandpack-react";

export function sendToSandpackBundlers(sandpack: SandpackState, message: any) {
  Object.values(sandpack.clients).forEach((client) => {
    client.iframe.contentWindow?.postMessage(message, "*");
  });
}
