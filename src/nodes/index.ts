import type { Node, NodeTypes, BuiltInNode } from "@xyflow/react";
import { PositionLoggerNode } from "./PostionLoggerNode";
import { UserNode } from "./UserNode";
import { DoxcureNode } from "./DoxecureNode";
import { IssuingAuthorityNode } from "./IssuingAuthorityNode";
import { VerifyingAuthorityNode } from "./VerifyingAuthority";
import { BlockchainNode } from "./BlockchainNode";

export type PositionLoggerNode = Node<
  {
    label?: string;
  },
  "position-logger"
>;

export type UserNode = Node<
  {
    label?: string;
  },
  "user"
>;

export type DoxcureNode = Node<
  {
    label?: string;
  },
  "doxcure"
>;
export type IssuingAuthorityNode = Node<
  {
    label?: string;
  },
  "issuing-authority"
>;
export type VerifyingAuthorityNode = Node<
  {
    label?: string;
  },
  "verifying-authority"
>;
export type BlockchainNode = Node<
  {
    label?: string;
  },
  "blockchain"
>;

export type AppNode =
  | BuiltInNode
  | PositionLoggerNode
  | UserNode
  | DoxcureNode
  | IssuingAuthorityNode
  | VerifyingAuthorityNode
  | BlockchainNode;

export const initialNodes: AppNode[] = [
  {
    id: "user",
    type: "user",
    position: { x: 0, y: 100 },
    data: { label: "Student" },
  },
  {
    id: "doxcure",
    type: "doxcure",
    position: { x: 500, y: 0 },
    data: { label: "Doxecure" },
  },
  {
    id: "issuing-authority",
    type: "issuing-authority",
    position: { x: 0, y: -100 },
    data: { label: "University" },
  },
  {
    id: "verifying-authority",
    type: "verifying-authority",
    position: { x: 500, y: 300 },
    data: { label: "Company" },
  },
  {
    id: "blockchain",
    type: "blockchain",
    position: { x: 1000, y: 50 },
    data: { label: "Blockchain" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  user: UserNode,
  doxcure: DoxcureNode,
  "issuing-authority": IssuingAuthorityNode,
  "verifying-authority": VerifyingAuthorityNode,
  blockchain: BlockchainNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
