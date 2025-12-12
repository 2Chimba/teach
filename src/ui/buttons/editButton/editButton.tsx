import { motion } from "framer-motion";
import type { Task } from "../../../Interfaces/interfaces";
import { SquarePen } from "lucide-react";
import styles from "../button.module.css";
import { useState } from "react";

interface IEditButton {
  item: Task;
  editTask: (payload: { id: number; newText: string }) => void;
}

export const EditButton = ({ item, editTask }: IEditButton) => {
  const [newInputText, setNewInputText] = useState(item.text);
  const [isEditing, setIsEditing] = useState(false);

  const saveTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      EditFunc();
    }
  };

  const EditFunc = () => {
    editTask({ id: item.id, newText: newInputText });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className={styles.editingArea}>
          <motion.input
            className={styles.input__editing}
            value={newInputText}
            onChange={(e) => setNewInputText(e.target.value)}
            onKeyDown={(e) => saveTask(e)}
            autoFocus
            initial={{ width: 30, height: 30, borderRadius: 15 }}
            animate={{ width: 300, height: 30, borderRadius: 15 }}
            transition={{ duration: 1 }}
          />
        </div>
      ) : (
        <motion.button
          className={styles.cart__button}
          whileHover={{ rotate: 30 }}
          onClick={() => setIsEditing(true)}
        >
          <SquarePen />
        </motion.button>
      )}
    </div>
  );
};

// return (
//     <div className={styles.editingArea}>
//       {editingTaskId === item.id && (
//         <motion.input
//           className={styles.input__editing}
//           value={editingTaskText}
//           onChange={(e) => setEditingTaskText(e.target.value)}
//           onKeyDown={(e) => saveTask(e, item.id)}
//           autoFocus
//           initial={{ width: 30, height: 30, borderRadius: 15 }}
//           animate={{ width: 300, height: 30, borderRadius: 15 }}
//           transition={{ duration: 1 }}
//         />
//       )}
//     </div>
//   );
