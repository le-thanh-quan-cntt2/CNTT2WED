//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LtqListTask from './components/LtqListTask';
import LtqTaskAddOrEdit from './components/LtqTaskAddOrEdit';

function App() {
  // Mock data
  const initialTasks = [
    { ltq_taskId: 2210900057, ltq_taskName: "Lê Thanh Quan", ltq_level: "Small" },
    { ltq_taskId: 1, ltq_taskName: "Học lập trình frontend", ltq_level: "Small" },
    { ltq_taskId: 2, ltq_taskName: "Học lập trình reactjs", ltq_level: "Medium" },
    { ltq_taskId: 3, ltq_taskName: "Lập trình với Frontend - Reactjs", ltq_level: "High" },
    { ltq_taskId: 4, ltq_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", ltq_level: "Small" },
  ];

  // State to store tasks
  const [ltqListTasks, setLtqListTasks] = useState(initialTasks);
  const [isAddOrEdit, setIsAddOrEdit] = useState(true); // Default to add form

  // Task object state
  const initialTask = { ltq_taskId: 0, ltq_taskName: "NTU", ltq_level: "medium" };
  const [ltqTask, setLtqTask] = useState(initialTask);

  // Handle edit
  const handleEdit = (param) => {
    console.log("App-Edit:", param);
    setLtqTask(param);
    setIsAddOrEdit(false); // Set form state to edit
  };

  // Handle submit (add or edit)
  const handleSubmit = (ltqParam) => {
    console.log("App:", ltqParam);

    if (isAddOrEdit) { // Add new task
      setLtqListTasks((prevTasks) => [...prevTasks, ltqParam]);
    } else { // Edit existing task
      const updatedTasks = ltqListTasks.map((task) =>
        task.ltq_taskId === ltqParam.ltq_taskId ? ltqParam : task
      );
      setLtqListTasks(updatedTasks);
      setIsAddOrEdit(true); // Reset form state to add
    }

    // Reset form task state
    setLtqTask(initialTask);
  };

  // Handle delete
  const handleDelete = (param) => {
    const filteredTasks = ltqListTasks.filter((task) => task.ltq_taskId !== param.ltq_taskId);
    setLtqListTasks(filteredTasks);
  };

  return (
    <div className="container border">
      <h1>Lê Thanh Quan-K22CNTT2</h1>
      <hr />
      <div>
        {/* Task list */}
        <LtqListTask
          renderLtqListTasks={ltqListTasks}
          onLtqTaskEdit={handleEdit}
          onLtqDelete={handleDelete}
        />
      </div>
      <div>
        <LtqTaskAddOrEdit
          renderLtqTask={ltqTask}
          renderLtqIsAddOrEdit={isAddOrEdit}
          ltqOnSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
