import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { reducer } from "./tasks/tasksSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
=======
import { reducer } from "./tasksSlice";
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0

export const store = configureStore({
  reducer: {
    taskState: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
<<<<<<< HEAD
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
=======
export type AppDispatch = typeof store.dispatch;
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
