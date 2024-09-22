import React, { useRef, useState } from "react";
import { type UserNode } from "./index";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export function VerifyingAuthorityNode({ data }: NodeProps<UserNode>) {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className=" bg-purple-500 px-0 py-4 rounded-md">
      {data.label && <div className="pb-2 flex px-4 ">{data.label}</div>}
      <hr />
      <div className="flex m-4 gap-4">
        <input type="file" ref={fileInputField} />
        <button>Verify Document</button>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} id="A" />
    </div>
  );
}
