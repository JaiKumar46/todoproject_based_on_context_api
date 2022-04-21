import React from "react";
import TaskListContextProvider from "../src/api/ContextApi";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";




const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
         <h1>Todo List</h1>
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;