import React from "react";
import { type UserNode } from "./index";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export function UserNode({ data }: NodeProps<UserNode>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className=" bg-purple-500 px-0 py-4 rounded-md">
      {data.label && <div className="pb-2 flex px-4 ">{data.label}</div>}
      <hr />
      <div className="flex m-4 gap-4">
        <button>View</button>
        <button>Download</button>
        <button>Share</button>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
