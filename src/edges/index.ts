import type { Edge, EdgeTypes } from "@xyflow/react";

export const initialEdges = [
  { id: "user->doxcure", source: "user", target: "doxcure", targetHandle: "b" },
  {
    id: "issueing-authoruty->doxcure",
    source: "issueing-authority",
    target: "doxcure",
    targetHandle: "a",
    animated: true,
  },
  {
    id: "doxcure->verifying-authority",
    source: "doxcure",
    target: "verifying-authority",
    animated: true,
  },
  {
    id: "user->verifying-authority",
    source: "user",
    target: "verifying-authority",
    targetHandle: "A",
    animated: true,
  },
  {
    id: "doxcure->blockchain",
    source: "doxcure",
    target: "blockchain",
    animated: true,
    sourceHandle: "a",
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
