import {
  CartCheckbox,
  CartText,
  DeleteButton,
  EditButton,
  EditingText,
} from "../components/ui.tsx";
import { motion, LayoutGroup } from "framer-motion";
import type { ICart } from "../../constants/interfaces";

export const Cart = ({
  visibleTasks,
  toggleDone,
  editingTaskId,
  editingTaskText,
  setEditingTaskText,
  saveTask,
  handleEditClick,
  deleteItem
}: ICart) => {
  return (
    
    <LayoutGroup>
      {visibleTasks.map((item, index) => (
        <motion.div
          // initial={{ opacity: 0, x: -100, }}
          // animate={{ opacity: 1, x: 0 }}
          // exit={{ opacity: 0, x: 100 }}
          // transition={{ duration: 0.5 }}

        
          layout
          initial={{ opacity: 0, x: -100,}}
              animate={{ opacity: 1, x: 0, }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}

          key={item.id}
          className={`cart${item.done ? " done" : ""}`}
        >
          <div className="cart__number">{index + 1})</div>

          <CartCheckbox item={item} toggleDone={toggleDone} />

          <CartText item={item} />

          <EditingText
            editingTaskId={editingTaskId}
            item={item}
            editingTaskText={editingTaskText}
            setEditingTaskText={setEditingTaskText}
            saveTask={saveTask}
          />

          <div className="container__cartButtons">
            <EditButton handleEditClick={handleEditClick} item={item} />
            <DeleteButton deleteItem={deleteItem} item={item} />
          </div>
        </motion.div>
      ))}
    </LayoutGroup>
  );
};
