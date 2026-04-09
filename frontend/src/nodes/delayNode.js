import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Delay"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`
        }
      ]}
    >

      <div style={{ fontSize: "12px", color: "#374151" }}>
        Adds delay to pipeline
      </div>

    </BaseNode>
  );

};