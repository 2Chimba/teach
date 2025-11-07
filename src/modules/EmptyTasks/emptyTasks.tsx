import { motion } from "framer-motion";
import type { Empty } from "../../Interfaces/interfaces";

export const EmptyTasks = ({ visibleTasks }: Empty) => {
  return (
    visibleTasks.length === 0 && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2>Список задач пуст</h2>
      </motion.div>
    )
  );
};
