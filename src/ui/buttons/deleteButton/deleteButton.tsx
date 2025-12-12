import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
<<<<<<< HEAD
import type { Task } from "../../../Interfaces/interfaces";
import styles from "../button.module.css";

interface IDeleteButton {
  deleteItem: (id: number) => void;
  item: Task;
}

=======
import type { IDeleteButton } from "../../../Interfaces/interfaces";
import styles from "../button.module.css";

>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
export const DeleteButton = ({ deleteItem, item }: IDeleteButton) => {
  return (
    <motion.button
      className={styles.cart__button}
      whileHover={{ rotate: 30 }}
      onClick={() => deleteItem(item.id)}
    >
      <Trash2 />
    </motion.button>
  );
};
