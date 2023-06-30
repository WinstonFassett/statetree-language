import { SandpackState, useSandpack } from "@codesandbox/sandpack-react"
import { cn } from "../lib/utils"

let checkedUri = false

export function ShareButton({className="btn btn-primary", ...props} = {} as any) {
  const {sandpack} = useSandpack()
  if (!checkedUri) {
    restoreSharedText()
    checkedUri = true
  }
  return <button className={cn(className)} onClick={handleShareClick}>Share</button>


  function stringifySession () {
    return JSON.stringify(getSessionData(sandpack))
  }


  function restoreSharedText() {
    const encodedText = window.location.hash.substr(1);
    if (encodedText) {
      console.log({ encodedText })
      // const decodedText = decodeURIComponent(encodedText);
      const decodedText = atob(encodedText);
      const sessionData = parseSession(decodedText)
      restoreSession(sandpack, sessionData)      
    }
  }
  function handleShareClick() {
    const text = stringifySession()
    // const encodedText = encodeURIComponent(text);
    const encodedText = btoa(text);
    const shareLink = `${window.location.origin}/#${encodedText}`;
    window.history.pushState({ path: shareLink }, '', shareLink);
    copyToClipboard(shareLink);
    alert('Link copied to clipboard!');
  }
}



type SessionData = Pick<SandpackState, 'files' | 'activeFile'>

function getSessionData (sandpack: SandpackState) {
  const { files, activeFile, } = sandpack
  return { files, activeFile }
}

function parseSession(text: string): SessionData {
  return JSON.parse(text)
}

function restoreSession(sandpack: SandpackState, sessionData: SessionData) {
  console.log('TODO: restore session', sessionData)
  sandpack.updateFile(sessionData.files)
  sandpack.setActiveFile(sessionData.activeFile)

}



function copyToClipboard(text: string) {
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
}
