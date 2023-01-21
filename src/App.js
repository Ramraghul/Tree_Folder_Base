import React, { useState } from "react";
import { Treebeard } from "react-treebeard";
import Task from './Task'

const data = {
  name: "Category 1",
  toggled: true,
  children: []
};

function App() {
  const [treeData, setTreeData] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  function handleAddCategory() {
    setModalOpen(true);
  }

  function handleAddSubcategory() {
    setModalOpen(true);
  }

  function handleModalClose(categoryName) {
    if (selectedNode) {
      selectedNode.children.push({ name: categoryName });
    } else {
      treeData.children.push({ name: categoryName, children: [] });
    }
    setTreeData(treeData);
    setModalOpen(false);
  }

  function onToggle(node, toggled) {
    if (node.children) {
      node.toggled = toggled;
    }
    setSelectedNode(node);
  }

  return (
    <div className="App">
      <button onClick={handleAddCategory}>Add Category</button>
      {selectedNode && (
        <button onClick={handleAddSubcategory}>Add Subcategory</button>
      )}
      <Treebeard data={treeData} onToggle={onToggle} />
      {modalOpen && (
        <Task
          handleClose={handleModalClose}
          prompt="Enter category name:"
        />
      )}
    </div>
  );
}

export default App;