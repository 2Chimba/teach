import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CartCheckbox } from "../ui/checkbox/checkbox";
import { CartText } from "../ui/cartText/cartText";
import { EditingText } from "../ui/editingText/editingText";
import { EditButton } from "../ui/buttons/editButton/editButton";
import { DeleteButton } from "../ui/buttons/deleteButton/deleteButton";
import type { ICart } from "../../../constants/interfaces";
import styles from "./cart.module.css";

export const Cart = ({
  visibleTasks,
  toggleDone,
  editingTaskId,
  editingTaskText,
  setEditingTaskText,
  saveTask,
  handleEditClick,
  deleteItem,
}: ICart) => {
  return (
    <LayoutGroup>
      <AnimatePresence>
        {visibleTasks.map((item, index) => (
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

            <EditingText
              editingTaskId={editingTaskId}
              item={item}
              editingTaskText={editingTaskText}
              setEditingTaskText={setEditingTaskText}
              saveTask={saveTask}
            />

            <div className={styles.container__cartButtons}>
              <EditButton handleEditClick={handleEditClick} item={item} />
              <DeleteButton deleteItem={deleteItem} item={item} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </LayoutGroup>
  );
};
