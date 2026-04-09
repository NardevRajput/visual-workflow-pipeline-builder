import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Math"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-a`
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-b`,
          style: { top: "60%" }
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-result`
        }
      ]}
    >

      <div style={{ fontSize: "12px", color: "#374151" }}>
        Performs math operations
      </div>

    </BaseNode>
  );

};