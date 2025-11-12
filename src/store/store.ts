import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./tasksSlice";

export const store = configureStore({
  reducer: {
    taskState: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;