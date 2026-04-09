//base node

import React from "react";
import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles }) => {

  return (
    <div className="node-card">

      {handles?.map((h, index) => (
        <Handle
          key={index}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}

      <div className="node-header">
        {title}
      </div>

      <div className="node-body">
        {children}
      </div>

    </div>
  );
};