//api node
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {

  return (
    <BaseNode
      title="API"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`
        }
      ]}
    >

      <div style={{ fontSize: "12px" }}>
        Fetch data from API
      </div>

    </BaseNode>
  );

};