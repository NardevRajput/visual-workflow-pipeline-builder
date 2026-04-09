import { useState, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  // detect variables like {{name}}
  useEffect(() => {

    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)];

    if (matches.length > 0) {
      const vars = matches.map(m => m[1]);
      setVariables([...new Set(vars)]);
    } else {
      setVariables([]);
    }

  }, [currText]);

  // auto resize textarea
  const handleChange = (e) => {

    const value = e.target.value;
    setCurrText(value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // dynamic handles
  const handles = [

    ...variables.map((v, index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${v}`,
      style: { top: 40 + index * 20 }
    })),

    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`
    }

  ];

  return (

    <BaseNode title="Text" handles={handles}>

      <div style={{ fontSize: "12px" }}>

        <label>
          Text:
          <textarea
            value={currText}
            onChange={handleChange}
            style={{
              width: "100%",
              minHeight: "50px",
              resize: "none",
              overflow: "hidden"
            }}
          />
        </label>

      </div>

    </BaseNode>

  );

};