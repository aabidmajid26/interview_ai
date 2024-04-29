import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: {} },
  reducers: {
    addTask: (state, action) => {
      state.tasks[action.payload.key] = action.payload;
    },
    deleteTask: (state, action) => {
      const key = action.payload.key;
      delete state.tasks[key];
    },
    updateTask: (state, action) => {
      const task = state.tasks[action.payload.key];
      task.name = action.payload.name;
      task.description = action.payload.description;
      task.date = action.payload.date;
      task.priority = action.payload.priority;
      task.status = action.payload.status;
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
