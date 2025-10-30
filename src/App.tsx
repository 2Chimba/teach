import "../assets/App.css";
import "../assets/index.css";
import { useMyHook } from "../hooks/useTask.ts";
import {
  InputArea,
  FilterButtons,
  QuanityInformation,
  EmptyTasks,
} from "../src/components/elements.tsx";
import { Cart } from "./components/cart.tsx";

function App() {
  const {
    setFilter,
    deleteDone,
    text,
    enter,
    setText,
    addItem,
    editingTaskId,
    editingTaskText,
    setEditingTaskText,
    handleEditClick,
    saveTask,
    visibleTasks,
    toggleDone,
    deleteItem,
    tasks,
    completedCount,
  } = useMyHook();

  return (
    <>
      <InputArea
        text={text}
        enter={enter}
        setText={setText}
        addItem={addItem}
      />

      <FilterButtons setFilter={setFilter} deleteDone={deleteDone} />

      <QuanityInformation tasks={tasks} completedCount={completedCount} />

      <EmptyTasks visibleTasks={visibleTasks} />

      <Cart
        visibleTasks={visibleTasks}
        toggleDone={toggleDone}
        editingTaskId={editingTaskId}
        editingTaskText={editingTaskText}
        setEditingTaskText={setEditingTaskText}
        saveTask={saveTask}
        handleEditClick={handleEditClick}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
