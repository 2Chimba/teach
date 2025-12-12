import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import type { Task } from "../../../Interfaces/interfaces";
import styles from "../button.module.css";

interface IDeleteButton {
  deleteItem: (id: number) => void;
  item: Task;
}

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
