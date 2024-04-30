import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../store/taskSlice";
import Task from "./Task";
import { sortTasks } from "../utils/sortTasks";

const Tasks = () => {
  const [sortParameter, setSortParameter] = useState("priority");
  const [sortedTasks, setSortedTasks] = useState([]);
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "",
    date: "",
    status: "Incomplete",
    key: null,
  });
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(name, description, priority, date, status);
    const taskForStore = { ...task };
    let key = new Date();
    key = key.toLocaleString();
    taskForStore.key = key;
    dispatch(addTask(taskForStore));
  }
  function updateState(e, field) {
    const tempTask = { ...task };
    let value = e.target.value;
    if (field === "priority") {
      value = parseInt(value);
    }
    tempTask[field] = value;
    setTask(tempTask);
  }
  function handleSelect(e) {
    console.log(e.target.value, "hhelloe");
    setSortParameter(e.target.value);
  }
  useEffect(() => {
    const tasksSorted = sortTasks(tasks.tasks, sortParameter);
    setSortedTasks(tasksSorted);
    setTask({
      name: "",
      description: "",
      priority: "",
      date: "",
      status: "Incomplete",
      key: null,
    });
  }, [sortParameter, tasks]);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => updateState(e, "name")}
          value={task.name}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => updateState(e, "description")}
          value={task.description}
        />
        <input
          type="number"
          placeholder="priority"
          onChange={(e) => updateState(e, "priority")}
          value={task.priority}
        />
        <input
          type="date"
          placeholder="date"
          onChange={(e) => updateState(e, "date")}
          value={task.date}
        />
        <input
          type="text"
          placeholder="status"
          onChange={(e) => updateState(e, "status")}
          value={task.status}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <div>
        <label>Sort the List on the Basis of: </label>
        <select onChange={handleSelect}>
          <option value={"priority"}>Priority</option>
          <option value={"name"}>Name</option>
          <option value={"status"}>Status</option>
        </select>
        <table>
          <tbody>
            {sortedTasks.map((task, idx) => {
              return <Task key={task.key} task={task} idx={idx} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
