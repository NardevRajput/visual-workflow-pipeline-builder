// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from "./BaseNode";


export const LLMNode = ({ id, data }) => {

  return (
     <BaseNode
      title="LLM"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-system`, style:{top:"30%"} },
        { type: "target", position: Position.Left, id: `${id}-prompt`, style:{top:"60%"} },
        { type: "source", position: Position.Right, id: `${id}-response` }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}
