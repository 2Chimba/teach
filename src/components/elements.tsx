import { motion } from "framer-motion";
import type {
  FilterButton,
  InputAreaProps,
  Quanity,
  Empty,
} from "../../constants/interfaces";

export const InputArea = ({
  text,
  enter,
  setText,
  addItem,
}: InputAreaProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="input__area"
    >
      <input
        type="text"
        value={text}
        onKeyDown={enter}
        onChange={(e) => setText(e.target.value)}
        className="input__text"
        placeholder="Введите задачу"
        autoFocus
      />
      <button className="button__add" onClick={addItem}>
        Создать задачу
      </button>
    </motion.div>
  );
};

export const FilterButtons = ({ setFilter, deleteDone }: FilterButton) => {
  return (
    <div className="filter__buttons">
      <motion.ul
        className="filter"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        layoutId=""
      >
        <li>
          <button
            className="filter__button all"
            onClick={() => setFilter("all")}
          >
            Все задачи
          </button>
        </li>
        <li>
          <button className="filter__button" onClick={() => setFilter("done")}>
            Завершённые
          </button>
        </li>
        <li>
          <button
            className="filter__button notDone"
            onClick={() => setFilter("notDone")}
          >
            В процессе
          </button>
        </li>
      </motion.ul>
      <motion.ul
        className="delete__buttons"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <li>
          <button
            className="filter__button all"
            onClick={() => deleteDone(true)}
          >
            Удалить готовые
          </button>
        </li>
        <li>
          <button
            className="filter__button notDone"
            onClick={() => deleteDone(false)}
          >
            Удалить в процессе
          </button>
        </li>
      </motion.ul>
    </div>
  );
};

export const QuanityInformation = ({ tasks, completedCount }: Quanity) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <p>Количество задач: {tasks.length}</p>
      <p>Выполненных задач: {completedCount}</p>
    </motion.div>
  );
};

export const EmptyTasks = ({ visibleTasks }: Empty) => {
  return (
    visibleTasks.length === 0 && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h2>Список задач пуст</h2>
      </motion.div>
    )
  );
};
