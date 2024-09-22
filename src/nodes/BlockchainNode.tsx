import React from "react";
import { type UserNode } from "./index";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { useDocStore } from "../store/doc-store";

export function BlockchainNode({ data }: NodeProps<UserNode>) {
  const doc = useDocStore((state) => state.docs);
  const [transaction, setTransaction] = React.useState(false);

  // if doc[0] exits function waits 3 sec and return set transaction to true
  if (doc[0] !== undefined) {
    if (!transaction) {
      setTimeout(() => {
        setTransaction(true);
      }, 3000);
    }
  }

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className=" bg-purple-500 px-0 py-4 rounded-md w-96">
      {data.label && <div className="pb-2 flex px-4 ">{data.label}</div>}
      <hr />
      <div className="flex flex-col m-4 gap-4">
        <div>Transactions</div>

       {transaction && <div className="flex gap-4 flex-col">
          <div>
            <div>Did: {doc[0]}</div>
            <div>Hash : 0x1234567890abcdef1234567890abcdef12345</div>
          </div>
        </div>}
      </div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
