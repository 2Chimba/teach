import './assets/styles/App.css'
import './assets/styles/index.css'
import { useMyHook } from "./hooks/useTask.ts";
import { Cart } from "./modules/cart/cart.tsx";
import { InputArea } from "./modules/inputArea/inputArea.tsx";
import { FilterButtons } from "./modules/filterButtons/filterButtons.tsx";
import { QuanityInformation } from "./modules/QuanityInformation/quanityInformation.tsx";
import { EmptyTasks } from "./modules/EmptyTasks/emptyTasks.tsx";

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
