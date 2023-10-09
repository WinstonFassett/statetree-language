import React from 'react'
import visualize from "xstate-plantuml";
import encoder from "plantuml-encoder";
import { useEffect, useMemo, useState } from "react";
import { useSandpack } from "@codesandbox/sandpack-react";
import debounce from 'lodash.debounce'
import { useStore } from "@nanostores/react";
import { theme } from "../store";

type PlantUmlConfig = Record<string, any>;

export function StateMachinePlantUmlPane(props: {} = {}) {
  const { sandpack } = useSandpack();
  const xstateJson = sandpack.files["/machine.json"].code;
  const [xstateConfig, setXStateConfig] = useState<PlantUmlConfig>()
  const debouncedChangeHandler = useMemo(() => debounce((xstateJson: string) => {
    if (xstateJson && xstateJson.length > 0) {
      const parsed = JSON.parse(xstateJson) as PlantUmlConfig
      setXStateConfig(parsed)
    }
  }, 200), [])
  useEffect(() => {
    debouncedChangeHandler(xstateJson)
  }, [xstateJson])
  return xstateConfig ? <XStatePlantUml config={xstateConfig} /> : <></>;
}

function XStatePlantUml({ config }: { config: PlantUmlConfig }) {
  const [error, setError] = useState<Error>()
  const dark = useStore(theme.dark)
  const puml = useMemo(() => {
    try {
      const res = config && visualize(config)
      if (error) {
        setError(undefined)
      }
      // return res
      return res.replace('@startuml', `@startuml
!theme ${dark ? 'cyborg' : 'cerulean'}`)
    } catch (err) {
      console.log({ error: err })
      setError(err as Error|undefined)
    }
  }, [config, dark]);
  // console.log({ puml })
  return puml ? <PlantUml puml={puml} /> : <div className="h-full">
    {error ? <div className="h-full p-4 bg-error text-error-content">
      {/* <h3 className="text-xl">Error: {error.message}</h3> */}
      <pre><code>
        {error.stack}
      </code></pre>
    </div> : `Nothing to render`}
  </div>;
}

function PlantUml({ puml }: { puml: string }) {
  const encodedPuml = useMemo(() => {
    return encoder.encode(puml);
  }, [puml]);
  const url = puml && `http://www.plantuml.com/plantuml/svg/${encodedPuml}`;
  return <div>{url && <img crossOrigin="anonymous" src={url} />}</div>;
}
