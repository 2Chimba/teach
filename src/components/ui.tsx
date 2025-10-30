import { motion } from "framer-motion";
import type {
  ICheckbox,
  IEditButton,
  IEditingText,
  IText,
  IDeleteButton,
} from "../../constants/interfaces";
import { Trash2, SquarePen } from "lucide-react";

export const CartCheckbox = ({ item, toggleDone }: ICheckbox) => {
  return (
    <div className="cart__checkbox">
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

export const CartText = ({ item }: IText) => {
  return <div className="cart__text">{item.text}</div>;
};

export const EditingText = ({
  editingTaskId,
  item,
  editingTaskText,
  setEditingTaskText,
  saveTask,
}: IEditingText) => {
  return (
    <div className="editingArea">
      {editingTaskId === item.id && (
        <motion.input
          className="input__editing"
          value={editingTaskText}
          onChange={(e) => setEditingTaskText(e.target.value)}
          onBlur={() => saveTask(item.id)}
          autoFocus
          initial={{ width: 30, height: 30, borderRadius: 15 }}
          animate={{ width: 300, height: 30, borderRadius: 15 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  );
};

export const EditButton = ({ handleEditClick, item }: IEditButton) => {
  return (
    <motion.button
      className="cart__button"
      whileHover={{ rotate: 30 }}
      onClick={() => handleEditClick(item.id, item.text)}
    >
      <SquarePen />
    </motion.button>
  );
};

export const DeleteButton = ({ deleteItem, item }: IDeleteButton) => {
  return (
    <motion.button
      className="cart__button"
      whileHover={{ rotate: 30 }}
      onClick={() => deleteItem(item.id)}
    >
      <Trash2 />
    </motion.button>
  );
};
