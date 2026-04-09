// draggableNode.js

export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {

    const appData = { nodeType };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = "move";

  };

  return (

    <div
      className={`toolbar-node ${type}`}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
    >

      <span className="node-label">
        {label}
      </span>

    </div>

  );

};