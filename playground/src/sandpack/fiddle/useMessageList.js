import { useEffect, useState } from 'react';

function useMessageList() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      setMessages(all => all.concat(event.data));
    });
  }, []);
  return messages;
}
