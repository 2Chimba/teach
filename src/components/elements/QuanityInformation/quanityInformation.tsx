import { motion } from "framer-motion";
import type { Quanity } from "../../../../constants/interfaces";

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
