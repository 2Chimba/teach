import type { Task } from "../../Interfaces/interfaces";

export interface IInitialState {
  tasks: Task[];
  filter: "all" | "done" | "notDone";
}
