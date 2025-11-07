import type { InputAreaProps } from "../../Interfaces/interfaces";
import { motion } from "framer-motion";
import styles from "./inputArea.module.css";

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
      className={styles.input__area}
    >
      <input
        type="text"
        value={text}
        onKeyDown={enter}
        onChange={(e) => setText(e.target.value)}
        className={styles.input__text}
        placeholder="Введите задачу"
        autoFocus
      />
      <button className={styles.button__add} onClick={addItem}>
        Создать задачу
      </button>
    </motion.div>
  );
};
