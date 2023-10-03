import { useSandpack, SandpackPreview } from "@codesandbox/sandpack-react";
import { useRef, useState, useEffect, useLayoutEffect, CSSProperties } from "react";

export function SandpackPreviewPane ({ style }: { style: CSSProperties }) {

const { sandpack } = useSandpack()
  const ref = useRef<HTMLDivElement>(null)
  console.log('sandpack preview', { sandpack })
  // const [sectionTop, setSectionTop] = useState(0);
  // const [windowHeight, setWindowHeight] = useState(0);
  // useLayoutEffect(() => {
  //   const container = ref.current;
  //   if (!container || !window) return;

  //   const onResize = (): void => {
  //     setSectionTop(container.offsetTop);
  //     setWindowHeight(window.innerHeight);
  //   };

  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return (): void => window.removeEventListener("resize", onResize);
  // }, [ref]);

  useEffect(() => {
    console.log('effect')
  })
  useLayoutEffect(() => {
    console.log('layout effect')
  })
  const sandpackRef = useRef()
  console.log({ sandpack })
  const { status } = sandpack
  const [count, setCount] = useState(1)
  useEffect(() => {
    console.log({ status })
    if (status === 'idle') {
      console.log('running sandpack')
      sandpack.runSandpack()
    }
  }, [status, count])
  return <div className='h-full w-full bg-pink-400 flex flex-col'>
    status: { status }
    <button onClick={()=> {setCount(count+1)}}>{count}</button>
    { <div className='flex-1' key={count}>
      {<SandpackPreview showOpenInCodeSandbox={false} showSandpackErrorOverlay={true} ref={sandpackRef} style={{ height: '90vh', width: '100vw' }} />}
    </div>}
  </div>


}
