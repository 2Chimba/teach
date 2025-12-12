import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CartCheckbox } from "../../ui/checkbox/checkbox";
import { CartText } from "../../ui/cartText/cartText";
import { EditButton } from "../../ui/buttons/editButton/editButton";
import { DeleteButton } from "../../ui/buttons/deleteButton/deleteButton";
import type { Task } from "../../Interfaces/interfaces";
import styles from "./cart.module.css";

interface ICart {
  filteredTasks: Task[];
  toggleDone: (id: number) => void;
  editTask: (payload: { id: number; newText: string }) => void;
  deleteItem: (id: number) => void;
}

export const Cart = ({
  filteredTasks,
  toggleDone,
  editTask,
  deleteItem,
}: ICart) => {
  return (
    <LayoutGroup>
      <AnimatePresence>
        {filteredTasks.map((item, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative" }}
            key={item.id}
            className={`${styles.cart} ${item.done ? styles.done : styles[""]}`}
          >
            <div className={styles.cart__number}>{index + 1})</div>

            <CartCheckbox item={item} toggleDone={toggleDone} />

            <CartText item={item} />

            <div className={styles.container__cartButtons}>
              <EditButton editTask={editTask} item={item} />
              <DeleteButton deleteItem={deleteItem} item={item} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </LayoutGroup>
  );
};
