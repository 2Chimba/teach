import { motion } from "framer-motion";
<<<<<<< HEAD
import type { Task } from "../../Interfaces/interfaces";
import styles from "./checkbox.module.css";

interface ICheckbox {
  item: Task;
  toggleDone: (id: number) => void;
}

=======
import type { ICheckbox } from "../../Interfaces/interfaces";
import styles from "./checkbox.module.css";

>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
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
