import { motion } from "framer-motion";
import type { IEditButton } from "../../../../../constants/interfaces";
import { SquarePen } from "lucide-react";
import styles from "../button.module.css";

export const EditButton = ({ handleEditClick, item }: IEditButton) => {
  return (
    <motion.button
      className={styles.cart__button}
      whileHover={{ rotate: 30 }}
      onClick={() => handleEditClick(item.id, item.text)}
    >
      <SquarePen />
    </motion.button>
  );
};
