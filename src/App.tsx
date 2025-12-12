import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { Cart } from "./modules/cart/cart.tsx";
import { InputArea } from "./modules/inputArea/inputArea.tsx";
import { FilterButtons } from "./modules/filterButtons/filterButtons.tsx";
import { QuanityInformation } from "./modules/QuanityInformation/quanityInformation.tsx";
import { EmptyTasks } from "./modules/EmptyTasks/emptyTasks.tsx";
<<<<<<< HEAD
import { useAppSelector } from "./store/store.ts";
import { useActions } from "./hooks/useActions.ts";
import { useMemo } from "react";

function App() {
  const {
    addTask,
=======
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
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
    setFilter,
    deleteTask,
    deleteDoneTasks,
    toggleTaskDone,
<<<<<<< HEAD
    editTask,
  } = useActions();

  const { tasks, filter } = useAppSelector((state) => state.taskState);

  const completedCount = tasks.filter((task) => task.done).length;

=======
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

>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.done);
      case "notDone":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  }, [tasks, filter]);

<<<<<<< HEAD
  // useEffect(() => {
  //   const currentTasks = localStorage.getItem("tasks");
  //   if (currentTasks) setTasks(JSON.parse(currentTasks) as unknown as Task[]);
  // }, [setTasks]);

  return (
    <>
      <InputArea addItem={addTask} numericId={tasks.length + 1} />
=======
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
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0

      <FilterButtons setFilter={setFilter} deleteDone={deleteDoneTasks} />

      <QuanityInformation tasks={tasks} completedCount={completedCount} />

<<<<<<< HEAD
      {filteredTasks.length === 0 && <EmptyTasks />}
=======
      <EmptyTasks visibleTasks={filteredTasks} />
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0

      <Cart
        filteredTasks={filteredTasks}
        toggleDone={toggleTaskDone}
<<<<<<< HEAD
        deleteItem={deleteTask}
        editTask={editTask}
=======
        editingTaskId={editingTaskId}
        editingTaskText={editingTaskText}
        setEditingTaskText={setEditingTaskText}
        saveTask={handleSaveTaskOnKeyDown}
        handleEditClick={handleSetEditingTask}
        deleteItem={deleteTask}
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
      />
    </>
  );
}

export default App;
