import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { Cart } from "./modules/cart/cart.tsx";
import { InputArea } from "./modules/inputArea/inputArea.tsx";
import { FilterButtons } from "./modules/filterButtons/filterButtons.tsx";
import { QuanityInformation } from "./modules/QuanityInformation/quanityInformation.tsx";
import { EmptyTasks } from "./modules/EmptyTasks/emptyTasks.tsx";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  setFilter,
  setTextInput,
  addTask,
  toggleTaskDone,
  deleteTask,
  deleteDoneTasks,
  setEditingTask,
  setEditingTaskText,
  saveTask,
} from "./store/tasksSlice.ts";
import type { RootState } from "./store/store.ts";

function App() {
  const dispatch = useDispatch();

  const { tasks, filter, textInput, editingTaskId, editingTaskText } =
    useSelector((state: RootState) => state.taskState);

  const handleSetFilter = (filter: "all" | "done" | "notDone") =>
    dispatch(setFilter(filter));
  const handleDeleteDone = (done: boolean) => dispatch(deleteDoneTasks(done));
  const handleToggleTask = (id: number) => dispatch(toggleTaskDone(id));
  const handleDeleteTask = (id: number) => dispatch(deleteTask(id));
  const handleSetEditingTask = (id: number, text: string) =>
    dispatch(setEditingTask({ id, text }));
  const handleSaveTaskOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === "Enter") {
      dispatch(saveTask(id));
    }
  };

  const handleSetEditingTaskText = (text: string) =>
    dispatch(setEditingTaskText(text));

  const handleSetText = (newText: string) => dispatch(setTextInput(newText));
  const handleAddItem = () => {
    if (textInput.trim() !== "") {
      dispatch(addTask());
    }
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const visibleTasks = React.useMemo(() => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.done);
      case "notDone":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const completedCount = tasks.filter((task) => task.done).length;

  return (
    <>
      <InputArea
        text={textInput}
        enter={handleEnter}
        setText={handleSetText}
        addItem={handleAddItem}
      />

      <FilterButtons
        setFilter={handleSetFilter}
        deleteDone={handleDeleteDone}
      />

      <QuanityInformation tasks={tasks} completedCount={completedCount} />

      <EmptyTasks visibleTasks={visibleTasks} />

      <Cart
        visibleTasks={visibleTasks}
        toggleDone={handleToggleTask}
        editingTaskId={editingTaskId}
        editingTaskText={editingTaskText}
        setEditingTaskText={handleSetEditingTaskText}
        saveTask={handleSaveTaskOnKeyDown}
        handleEditClick={handleSetEditingTask}
        deleteItem={handleDeleteTask}
      />
    </>
  );
}

export default App;
