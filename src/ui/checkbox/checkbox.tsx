import { motion } from "framer-motion";
import type { Task } from "../../Interfaces/interfaces";
import styles from "./checkbox.module.css";

interface ICheckbox {
  item: Task;
  toggleDone: (id: number) => void;
}

export const CartCheckbox = ({ item, toggleDone }: ICheckbox) => {
  return (
    <div className={styles.cart__checkbox}>
      <motion.input
        type="checkbox"
        name="done"
        value="done"
        id={`done-${item.id}`}
        checked={item.done}
        onChange={() => toggleDone(item.id)}
        whileHover={{ rotate: 5 }}
      />
    </div>
  );
};
