import { useEffect, useState } from 'react';

export function useSharedState() {
  const [model, setModel] = useState();
  const [mode, setMode] = useState();
  const [events, setEvents] = useState([]);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    window.parent.postMessage({ type: 'ready' }, '*');
    window.addEventListener("message", (event) => {
      let { data } = event;
      if (typeof data === 'object') {
        const { type } = data;
        if (type === 'model') {
          setModel(data.model);
          if (data.events) setEvents(data.events);
        }
        if (type === 'state') {
          setMode(data.state);
        }
        if (type === 'dark') {
          setIsDark(data.dark);
        }
      }
    });
  }, []);
  function send(event) {
    window.parent.postMessage({ type: 'send', event }, '*');
  }
  return { mode, model, events, isDark, send };
}
