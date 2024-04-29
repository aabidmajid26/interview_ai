import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask, deleteTask, updateTask } from "../store/taskSlice";
import Task from "./Task";

const Tasks = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "",
    date: "",
    status: "",
    key: null,
  });
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(name, description, priority, date, status);
    const taskForStore = { ...task };
    taskForStore.key = new Date();
    dispatch(addTask(taskForStore));
  }
  function updateState(e, field) {
    const tempTask = { ...task };
    tempTask[field] = e.target.value;
    setTask(tempTask);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => updateState(e, "name")}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => updateState(e, "description")}
        />
        <input
          type="number"
          placeholder="priority"
          onChange={(e) => updateState(e, "priority")}
        />
        <input
          type="date"
          placeholder="date"
          onChange={(e) => updateState(e, "date")}
        />
        <input
          type="text"
          placeholder="status"
          onChange={(e) => updateState(e, "status")}
          value={"Incomplete"}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <table>
          <tbody>
            {Object.values(tasks.tasks).map((task, idx) => {
              return <Task key={task.name} task={task} idx={idx} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
