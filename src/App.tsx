import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { Cart } from "./modules/cart/cart.tsx";
import { InputArea } from "./modules/inputArea/inputArea.tsx";
import { FilterButtons } from "./modules/filterButtons/filterButtons.tsx";
import { QuanityInformation } from "./modules/QuanityInformation/quanityInformation.tsx";
import { EmptyTasks } from "./modules/EmptyTasks/emptyTasks.tsx";
import { useSelector } from "react-redux";
import React from "react";
import type { RootState } from "./store/store.ts";
import { useActions } from "./hooks/useActions.ts";
import { useMemo } from "react";
import { useEffect } from "react";

function App() {
  const {
    saveTask,
    setEditingTask,
    setEditingTaskText,
    addTask,
    setTextInput,
    setFilter,
    deleteTask,
    deleteDoneTasks,
    toggleTaskDone,
  } = useActions();

  const { tasks, filter, textInput, editingTaskId, editingTaskText } =
    useSelector((state: RootState) => state.taskState);

  const completedCount = tasks.filter((task) => task.done).length;

  const handleSetEditingTask = (id: number, text: string) =>
    setEditingTask({ id, text });

  const handleSaveTaskOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === "Enter") {
      saveTask(id);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    if (textInput.trim() !== "") {
      addTask();
    }
  };

  const visibleTasks = useMemo(() => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.done);
      case "notDone":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <>
      <InputArea
        text={textInput}
        enter={handleEnter}
        setText={setTextInput}
        addItem={handleAddItem}
      />

      <FilterButtons setFilter={setFilter} deleteDone={deleteDoneTasks} />

      <QuanityInformation tasks={tasks} completedCount={completedCount} />

      <EmptyTasks visibleTasks={visibleTasks} />

      <Cart
        visibleTasks={visibleTasks}
        toggleDone={toggleTaskDone}
        editingTaskId={editingTaskId}
        editingTaskText={editingTaskText}
        setEditingTaskText={setEditingTaskText}
        saveTask={handleSaveTaskOnKeyDown}
        handleEditClick={handleSetEditingTask}
        deleteItem={deleteTask}
      />
    </>
  );
}

export default App;
