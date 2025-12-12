import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./tasks/tasksSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    taskState: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
