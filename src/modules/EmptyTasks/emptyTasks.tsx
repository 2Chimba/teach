import { motion } from "framer-motion";
<<<<<<< HEAD

export const EmptyTasks = () => {
  return (
=======
import type { Empty } from "../../Interfaces/interfaces";

export const EmptyTasks = ({ visibleTasks }: Empty) => {
  return (
    visibleTasks.length === 0 && (
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2>Список задач пуст</h2>
      </motion.div>
<<<<<<< HEAD
=======
    )
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
  );
};
