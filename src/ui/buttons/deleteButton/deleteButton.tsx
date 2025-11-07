import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import type { IDeleteButton } from "../../../Interfaces/interfaces";
import styles from "../button.module.css";

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
