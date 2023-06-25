import { useEffect, useState } from 'react'
export default function App() {
  const { mode, model } = useSharedState()
  return <div className="h-full flex flex-col" data-theme="night">
    <div className='rounded p-4 text-3xl bg-primary text-primary-content'>
      Hello!
    </div>
    <div className='flex-1 p-4'>
      <div>The state is 
        <div className={`text-2xl text-accent-content bg-${mode?.toLowerCase() || "slate"}-500 rounded-full text-center my-4 p-4`}>
          {mode ?? 'Unknown'}
        </div>
      </div>      
    </div>
  </div>
}

function useSharedState () {
  const [model, setModel] = useState()
  const [mode, setMode] = useState()
  useEffect(() => {
    window.addEventListener("message", (event) => {      
      let { data } = event
      if (typeof data === 'object') {
        const { type } = data
        if (type === 'model') {
          setModel(data.model)
        }
        if (type === 'state') {
          setMode(data.state)
        }
      }
    });
  }, [])
  return { mode, model }
}


function useMessageList () {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    window.addEventListener("message", (event) => {      
      setMessages(all => all.concat(event.data));      
    });
  }, [])  
  return messages
}