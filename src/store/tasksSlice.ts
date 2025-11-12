import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskState } from "../Interfaces/interfaces";

const initialState: TaskState = {
  tasks: (() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  })(),
  filter: "all",
  todoId: 0,
  textInput: "",
  editingTaskId: null,
  editingTaskText: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<"all" | "done" | "notDone">) {
      state.filter = action.payload;
    },
    setTextInput(state, action: PayloadAction<string>) {
      state.textInput = action.payload;
    },
    setTodoId(state, action: PayloadAction<number>) {
      state.todoId = action.payload;
    },
    addTask(state) {
      if (state.textInput.trim() !== "") {
        state.tasks.push({
          id: state.todoId,
          text: state.textInput,
          done: false,
          favorite: false,
        });
        state.todoId += 1;
        state.textInput = "";
      }
    },
    toggleTaskDone(state, action: PayloadAction<number>) {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.done = !task.done;
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    deleteDoneTasks(state, action: PayloadAction<boolean>) {
      state.tasks = state.tasks.filter((t) => t.done !== action.payload);
    },
    setEditingTask(state, action: PayloadAction<{ id: number; text: string }>) {
      state.editingTaskId = action.payload.id;
      state.editingTaskText = action.payload.text;
    },
    setEditingTaskText(state, action: PayloadAction<string>) {
      state.editingTaskText = action.payload;
    },
    saveTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task && state.editingTaskText.trim() !== "") {
        task.text = state.editingTaskText;
        state.editingTaskId = null;
        state.editingTaskText = "";
      }
    },
  },
});

export const { actions, reducer } = tasksSlice

// export const {
//   setFilter,
//   setTextInput,
//   setTodoId,
//   addTask,
//   toggleTaskDone,
//   deleteTask,
//   deleteDoneTasks,
//   setEditingTask,
//   setEditingTaskText,
//   saveTask,
// } = tasksSlice.actions;

// export default tasksSlice.reducer;
