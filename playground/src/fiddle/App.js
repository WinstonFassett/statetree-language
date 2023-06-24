import { useEffect, useState } from 'react'
export default function App() {
  const [messages, setMessages] = useState([])
  const [model, setModel] = useState()
  const [mode, setMode] = useState()
  useEffect(() => {
    window.addEventListener("message", (event) => {      
      setMessages(all => all.concat(event.data));
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
  
  return <div className="">
    <div className='rounded p-4 text-3xl bg-green-200'>Hello!</div>
    <div className='p-4'>
      <div>The state is 
        <div className={`text-2xl bg-${mode?.toLowerCase() || "slate"}-500 rounded-full text-center my-4 p-4`}>
          {mode ?? 'Unknown'}
        </div>
        {/*  */}
      </div>
      {model && <>
        <h3 className='text-xl'>model</h3>    
        <pre className='text-xs whitespace-pre'>
          <code>{JSON.stringify(model, null, 2)}</code>
        </pre>
      </>}
      {/* <h3>messages </h3>     */}
      {/* <pre className="text-xs">
        {messages.map((message, index) => {
          return (
            <code key={index}>{JSON.stringify(message, null, 2)}</code>
          )
        })}      
      </pre> */}
    </div>
  </div>
}