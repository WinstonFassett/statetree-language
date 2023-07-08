import visualize from "xstate-plantuml";
import encoder from "plantuml-encoder";
import { useEffect, useMemo } from "react";
import { useSandpack } from "@codesandbox/sandpack-react";

const config = {
  key: "light",
  initial: "green",
  states: {
    green: {
      on: {
        TIMER: "red",
      },
    },
    red: {
      on: {
        TIMER: "green",
      },
    },
  },
};

// const puml = visualize(config);
// console.log({ res: puml });

// const url = "http://www.plantuml.com/plantuml/svg/" + encoder.encode(puml);
// console.log("url", url);

// export function StateMachinePlantUml({ config }: { config: any }) {
//   const puml = useMemo(() => visualize(config), [config])
//   const url = puml && `http://www.plantuml.com/plantuml/svg/${encoder.encode(puml)}`;
//   console.log("url", url);
//   return <div>
//     <div className="text-xl">State Machine Plant UML</div>
//     {url && <img src={url} />}
//   </div>
// }

export function StateMachinePlantUmlPane() {
  const { sandpack } = useSandpack();
  const xstateJson = sandpack.files["/machine.json"].code;
  const config = useMemo(() => {
    console.log("xstate:");
    console.log(xstateJson);
    return xstateJson && xstateJson.length > 0 && JSON.parse(xstateJson);
  }, [xstateJson]);
  console.log({ config });
  const puml = useMemo(() => config && visualize(config), [config]);

  const encodedPuml = useMemo(() => {
    return encoder.encode(puml)
  }, [puml]);
  const url =
    puml && `http://www.plantuml.com/plantuml/svg/${encodedPuml}`;
  return (
    <div>
      <div className="text-xl">State Machine Plant UML</div>
      {url && <img src={url} />}
    </div>
  );
}
