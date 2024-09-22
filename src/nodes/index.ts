import type { Node, NodeTypes, BuiltInNode } from "@xyflow/react";
import { PositionLoggerNode } from "./PostionLoggerNode";
import { UserNode } from "./UserNode";
import { DoxcureNode } from "./DoxecureNode";
import { IssueingAuthorityNode } from "./IssueingAuthorityNode";
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
export type IssueingAuthorityNode = Node<
  {
    label?: string;
  },
  "issueing-authority"
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
  | IssueingAuthorityNode
  | VerifyingAuthorityNode
  | BlockchainNode;

export const initialNodes: AppNode[] = [
  {
    id: "user",
    type: "user",
    position: { x: 0, y: 100 },
    data: { label: "User" },
  },
  {
    id: "doxcure",
    type: "doxcure",
    position: { x: 500, y: 0 },
    data: { label: "Doxcure" },
  },
  {
    id: "issueing-authority",
    type: "issueing-authority",
    position: { x: 0, y: -100 },
    data: { label: "Issueing Authority" },
  },
  {
    id: "verifying-authority",
    type: "verifying-authority",
    position: { x: 500, y: 200 },
    data: { label: "Verifying Authority" },
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
  "issueing-authority": IssueingAuthorityNode,
  "verifying-authority": VerifyingAuthorityNode,
  blockchain: BlockchainNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
