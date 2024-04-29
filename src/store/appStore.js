import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import taskReducer from "./taskSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: taskReducer,
  },
});

export default appStore;
