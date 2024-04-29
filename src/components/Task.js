import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../store/taskSlice";

const Task = ({ task, idx }) => {
  const [editMode, setEditMode] = useState(false);
  const [task_, setTask_] = useState({ ...task });
  const dispatch = useDispatch();
  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteTask(task));
  }
  function handleEdit(e) {
    if (!editMode) {
      setEditMode(true);
      return;
    }
    setEditMode(false);
    const taskForStore = { ...task_ };
    dispatch(updateTask(taskForStore));
  }
  function updateState(e, field) {
    const tempTask = { ...task_ };
    tempTask[field] = e.target.value;
    setTask_(tempTask);
  }

  return (
    <tr>
      <td>
        <input
          readOnly={!editMode}
          value={task_?.name}
          onChange={(e) => updateState(e, "name")}
        />
      </td>
      <td>
        <input
          readOnly={!editMode}
          value={task_?.description}
          onChange={(e) => updateState(e, "description")}
        />
      </td>
      <td>
        <input
          readOnly={!editMode}
          value={task_?.priority}
          onChange={(e) => updateState(e, "priority")}
        />
      </td>
      <td>
        <input
          readOnly={!editMode}
          value={task_?.date}
          onChange={(e) => updateState(e, "date")}
        />
      </td>
      <td>
        <input
          readOnly={!editMode}
          value={task_?.status}
          onChange={(e) => updateState(e, "status")}
        />
      </td>
      <td>
        <button onClick={(e) => handleEdit(e)}>
          {editMode ? "Update" : "Edit"}
        </button>
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
