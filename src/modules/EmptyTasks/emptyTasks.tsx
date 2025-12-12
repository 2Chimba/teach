import { motion } from "framer-motion";

export const EmptyTasks = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2>Список задач пуст</h2>
      </motion.div>
  );
};
