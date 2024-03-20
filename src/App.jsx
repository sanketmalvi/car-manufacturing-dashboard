import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "./mockData/nodeData";
import nodeView from "./components/nodeView";

function App() {

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={{ custom: nodeView }}
        fitView
        attributionPosition="bottom-left"
      />
    </div>
  )
}

export default App
