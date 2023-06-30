import { useEffect, useState } from 'react';

export function useSharedState() {
  const [model, setModel] = useState();
  const [mode, setMode] = useState();
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      let { data } = event;
      if (typeof data === 'object') {
        const { type } = data;
        if (type === 'model') {
          setModel(data.model);
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
  return { mode, model, isDark };
}
