// import { useState, useEffect } from "react";
// import React from "react";
// import type { Task } from "../Interfaces/interfaces";

// export const useMyHook = () => {
//   const [filter, setFilter] = useState("all");
//   const [todo, setTodo] = useState(0);
//   const [text, setText] = useState("");
//   const [editingTaskId, setEditingTaskId] = React.useState<number | null>(null);
//   const [editingTaskText, setEditingTaskText] = React.useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>(() => {
//     const saved = localStorage.getItem("tasks");
//     return saved ? JSON.parse(saved) : [];
//   });
  
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleEditClick = (id: number, currentText: string) => {
//     setEditingTaskId(id);
//     setEditingTaskText(currentText);
//   };

//   const saveTask = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
//     if (e.key === "Enter") {
//       setTasks(
//         tasks.map((task) =>
//           task.id === id ? { ...task, text: editingTaskText } : task
//         )
//       );
//       setEditingTaskId(null);
//     }
//   };

//   const visibleTasks = tasks.filter((task) => {
//     if (filter === "done") return task.done;
//     if (filter === "notDone") return !task.done;
//     return true;
//   });

//   const toggleDone = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, done: !task.done } : task
//       )
//     );
//   };

//   const addItem = () => {
//     const newItem = {
//       id: todo,
//       text: `${text}`,
//       done: false,
//       favorite: false
//     };
//     if (text.trim() != "") {
//       setTasks([...tasks, newItem]);
//       setTodo(todo + 1);
//       setText("");
//     }
//   };

//   const deleteItem = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const deleteDone = (doneStatus: boolean) => {
//     setTasks(tasks.filter((task) => task.done !== doneStatus));
//   };

//   const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       addItem();
//     }
//   };

//   const completedCount = tasks.filter((task) => task.done).length;

//   return {
//     filter,
//     setFilter,
//     todo,
//     setTodo,
//     text,
//     setText,
//     editingTaskId,
//     setEditingTaskId,
//     editingTaskText,
//     setEditingTaskText,
//     tasks,
//     setTasks,
//     handleEditClick,
//     saveTask,
//     visibleTasks,
//     toggleDone,
//     addItem,
//     deleteItem,
//     deleteDone,
//     enter,
//     completedCount,
//   };
// };
