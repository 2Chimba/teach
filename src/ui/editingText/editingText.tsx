import { motion } from "framer-motion";
import type { IEditingText } from "../../Interfaces/interfaces";
import styles from "./editingText.module.css";

export const EditingText = ({
  editingTaskId,
  item,
  editingTaskText,
  setEditingTaskText,
  saveTask,
}: IEditingText) => {
  return (
    <div className={styles.editingArea}>
      {editingTaskId === item.id && (
        <motion.input
          className={styles.input__editing}
          value={editingTaskText}
          onChange={(e) => setEditingTaskText(e.target.value)}
          onKeyDown={(e) => saveTask(e, item.id)}
          autoFocus
          initial={{ width: 30, height: 30, borderRadius: 15 }}
          animate={{ width: 300, height: 30, borderRadius: 15 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  );
};
