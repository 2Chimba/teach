import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { Cart } from "./modules/cart/cart.tsx";
import { InputArea } from "./modules/inputArea/inputArea.tsx";
import { FilterButtons } from "./modules/filterButtons/filterButtons.tsx";
import { QuanityInformation } from "./modules/QuanityInformation/quanityInformation.tsx";
import { EmptyTasks } from "./modules/EmptyTasks/emptyTasks.tsx";
import { useAppSelector } from "./store/store.ts";
import { useActions } from "./hooks/useActions.ts";
import { useEffect, useMemo } from "react";

function App() {
  const {
    addTask,
    setFilter,
    deleteTask,
    deleteDoneTasks,
    toggleTaskDone,
    editTask,
  } = useActions();

  const { tasks, filter } = useAppSelector((state) => state.taskState);

  const completedCount = tasks.filter((task) => task.done).length;

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <InputArea addItem={addTask} numericId={tasks.length + 1} />

      <FilterButtons setFilter={setFilter} deleteDone={deleteDoneTasks} />

      <QuanityInformation tasks={tasks} completedCount={completedCount} />

      {filteredTasks.length === 0 && <EmptyTasks />}

      <Cart
        filteredTasks={filteredTasks}
        toggleDone={toggleTaskDone}
        deleteItem={deleteTask}
        editTask={editTask}
      />
    </>
  );
}

export default App;
