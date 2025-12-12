import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInitialState } from "./types";

const initialState: IInitialState = {
  tasks: [],
  filter: "all",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      // localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTaskDone: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.done = !task.done;
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const edit = state.tasks.find((t) => t.id === id);
      if (edit) {
        edit.text = newText;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<"all" | "done" | "notDone">) => {
      state.filter = action.payload;
    },
    deleteDoneTasks: (state, action: PayloadAction<boolean>) => {
      state.tasks = state.tasks.filter((t) => t.done !== action.payload);
    },
  },
});

export const { actions, reducer } = tasksSlice;
