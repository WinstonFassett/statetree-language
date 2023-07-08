import visualize from "xstate-plantuml";
import encoder from "plantuml-encoder";
import { useEffect, useMemo, useState } from "react";
import { useSandpack } from "@codesandbox/sandpack-react";
import debounce from 'lodash.debounce'

type PlantUmlConfig = Record<string, any>;

export function StateMachinePlantUmlPane() {
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
  return xstateConfig && <XStatePlantUml config={xstateConfig} />;
}

function XStatePlantUml({ config }: { config: PlantUmlConfig }) {
  const puml = useMemo(() => config && visualize(config), [config]);
  return <PlantUml puml={puml} />;
}

function PlantUml({ puml }: { puml: string }) {
  const encodedPuml = useMemo(() => {
    return encoder.encode(puml);
  }, [puml]);
  const url = puml && `http://www.plantuml.com/plantuml/svg/${encodedPuml}`;
  return <div>{url && <img src={url} />}</div>;
}
