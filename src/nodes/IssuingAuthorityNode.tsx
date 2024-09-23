import React, { useRef, useState } from "react";
import { type UserNode } from "./index";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import {useDocStore} from "../store/doc-store"

export function IssuingAuthorityNode({ data }: NodeProps<UserNode>) {
  const [file, setFile] = useState<File | undefined>();
  const doc = useDocStore((state) => state.docs);
  const addDoc = useDocStore((state) => state.addDoc);
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & { files: FileList };
    setFile(target.files?.[0]);  
    console.log("File selected: ", file); 
  };  
  const handleUploadClick = () => {
    if (file) {
      console.log("Uploading file: ", file.name);
      addDoc(file.name);
      console.log("Doc: ", doc[0]);
    }
    } 
    
  // const fileInputField = useRef(null);
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className=" bg-purple-500 px-0 py-4 rounded-md">
      {data.label && <div className="pb-2 flex px-4 ">{data.label}</div>}
      <hr />
      <div className="flex m-4 gap-4">
        <input type="file" name="document" onChange={handleOnChange} />
        <button onClick={handleUploadClick}>Upload</button>
      </div>
      <div className="flex m-4 flex-col">{doc}</div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
