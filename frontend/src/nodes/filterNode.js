import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Filter"
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
        Filters incoming data
      </div>

    </BaseNode>
  );

};