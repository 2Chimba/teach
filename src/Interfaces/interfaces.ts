export interface Task {
  id: number;
  text: string;
  done: boolean;
  favorite: boolean
}

export interface TaskState {
  tasks: Task[];
  filter: "all" | "done" | "notDone";
  todoId: number;
  textInput: string;
  editingTaskId: number | null;
  editingTaskText: string;
}
export interface InputAreaProps {
  text: string;
  enter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setText: (value: string) => void;
  addItem: () => void;
}

export interface FilterButton {
  setFilter: (value: "all" | "done" | "notDone") => void;
  deleteDone: (value: boolean) => void;
}

export interface Quanity {
  tasks: Task[];
  completedCount: number;
}

export interface Empty {
  visibleTasks: Task[];
}

export interface ICheckbox {
  item: Task;
  toggleDone: (id: number) => void;
}

export interface IText {
  item: Task;
}

export interface IEditingText {
  editingTaskId: number | null;
  item: Task;
  editingTaskText: string;
  setEditingTaskText: (currentText: string) => void;
  saveTask: (e: React.KeyboardEvent<HTMLInputElement>, id: number) => void;
}

export interface IEditButton {
  handleEditClick: (id: number, currentText: string) => void;
  item: Task;
}

export interface IDeleteButton {
  deleteItem: (id: number) => void;
  item: Task;
}

export interface ICart {
  visibleTasks: Task[];
  toggleDone: (id: number) => void;
  editingTaskId: number | null;
  editingTaskText: string;
  setEditingTaskText: (currentText: string) => void;
  saveTask: (e: React.KeyboardEvent<HTMLInputElement>, id: number) => void;
  handleEditClick: (id: number, currentText: string) => void;
  deleteItem: (id: number) => void;
}
