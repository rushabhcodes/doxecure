import React, { useState } from "react";
import { type UserNode } from "./index";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Step, Stepper } from "react-form-stepper";
import { useDocStore } from "../store/doc-store";

export function DoxcureNode({ data }: NodeProps<UserNode>) {
  const [steps, setSteps] = useState(-1);
  const doc = useDocStore((state) => state.docs);
  if(doc[0] !== undefined){
    if (steps < 3) {
      setTimeout(() => {
        setSteps(steps + 1);
      }, 1000);
    }
    console.log("Steps: ", steps);
    console.log("Doc: ", doc);
  }

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className=" bg-purple-500 px-0 py-4 w-80  rounded-md">
      {data.label && <div className="pb-2 flex px-4 ">{data.label}</div>}
      <hr />
      <div className="flex m-4 gap-4 flex-col">
        <div>Document</div>
        <Stepper
          activeStep={steps}
          styleConfig={{
            size: 20,
            activeBgColor: "lightgreen",
            completedBgColor: "green",
            activeTextColor: "white",
            completedTextColor: "white",
            inactiveBgColor: "white",
            inactiveTextColor: "black",
            fontWeight: 500,
            circleFontSize: 12,
            labelFontSize: 12,
            borderRadius: 50,
          }}
        >
          <Step label="Generate Hash" />
          <Step label="Apply Stegnography " />
          <Step label="Add to Blockchain" />
        </Stepper>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className="top-10"
      />
      <Handle type="target" position={Position.Left} id="b" />
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  );
}
