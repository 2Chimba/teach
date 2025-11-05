import { motion } from "framer-motion";
import type { FilterButton } from "../../../../constants/interfaces";
import styles from "./filterButtons.module.css";

export const FilterButtons = ({ setFilter, deleteDone }: FilterButton) => {
  return (
    <div className={styles.filter__buttons}>
      <motion.ul
        className={styles.filter}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        layoutId=""
      >
        <li>
          <button
            className={`${styles.filter__button} ${styles.all}`}
            onClick={() => setFilter("all")}
          >
            Все задачи
          </button>
        </li>
        <li>
          <button
            className={styles.filter__button}
            onClick={() => setFilter("done")}
          >
            Завершённые
          </button>
        </li>
        <li>
          <button
            className={`${styles.filter__button} ${styles.notDone}`}
            onClick={() => setFilter("notDone")}
          >
            В процессе
          </button>
        </li>
      </motion.ul>
      <motion.ul
        className={styles.delete__buttons}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <li>
          <button
            className={`${styles.filter__button} ${styles.all}`}
            onClick={() => deleteDone(true)}
          >
            Удалить готовые
          </button>
        </li>
        <li>
          <button
            className={`${styles.filter__button} ${styles.notDone}`}
            onClick={() => deleteDone(false)}
          >
            Удалить в процессе
          </button>
        </li>
      </motion.ul>
    </div>
  );
};
