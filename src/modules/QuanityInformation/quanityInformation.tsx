import { motion } from "framer-motion";
<<<<<<< HEAD
import type { Task } from "../../Interfaces/interfaces";

interface Quanity {
  tasks: Task[];
  completedCount: number;
}
=======
import type { Quanity } from "../../Interfaces/interfaces";
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0

export const QuanityInformation = ({ tasks, completedCount }: Quanity) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <p>Количество задач: {tasks.length}</p>
      <p>Выполненных задач: {completedCount}</p>
    </motion.div>
  );
};
