import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice'

export const store = configureStore({
  reducer: {
    taskState: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;