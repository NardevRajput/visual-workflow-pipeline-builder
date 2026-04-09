// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {

    const pipeline = { nodes, edges };

    const formData = new FormData();
    formData.append("pipeline", JSON.stringify(pipeline));

    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    alert(`Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag}`);
  };

  return (
    <div className="submit-container">
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
