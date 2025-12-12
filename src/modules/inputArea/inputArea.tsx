<<<<<<< HEAD
import { motion } from "framer-motion";
import styles from "./inputArea.module.css";
import { useState } from "react";

interface InputAreaProps {
  addItem: (payload: {
    id: number;
    text: string;
    done: boolean;
    favorite: boolean;
  }) => void;
  numericId: number;
}

interface IhandleCreateTask {
  id: number;
  text: string;
  done: boolean;
  favorite: boolean;
}

export const InputArea = ({ addItem, numericId }: InputAreaProps) => {
  const [value, setValue] = useState("");

  const handleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    payload: { id: number; text: string; done: boolean; favorite: boolean }
  ) => {
    if (e.key === "Enter") {
      handleCreateTask(payload);
    }
  };

  const handleCreateTask = ({
    id,
    text,
    done,
    favorite,
  }: IhandleCreateTask) => {
    if (value.trim() !== "") {
      addItem({
        id,
        text,
        done,
        favorite,
      });
      setValue("");
    }
  };

=======
import type { InputAreaProps } from "../../Interfaces/interfaces";
import { motion } from "framer-motion";
import styles from "./inputArea.module.css";

export const InputArea = ({
  text,
  enter,
  setText,
  addItem,
}: InputAreaProps) => {
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={styles.input__area}
    >
      <input
        type="text"
<<<<<<< HEAD
        value={value}
        onKeyDown={(e) =>
          handleEnter(e, {
            id: numericId,
            text: value,
            done: false,
            favorite: false,
          })
        }
        onChange={(e) => setValue(e.target.value)}
=======
        value={text}
        onKeyDown={enter}
        onChange={(e) => setText(e.target.value)}
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
        className={styles.input__text}
        placeholder="Введите задачу"
        autoFocus
      />
<<<<<<< HEAD
      <button
        className={styles.button__add}
        onClick={() =>
          handleCreateTask({
            id: numericId,
            text: value,
            done: false,
            favorite: false,
          })
        }
      >
=======
      <button className={styles.button__add} onClick={addItem}>
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
        Создать задачу
      </button>
    </motion.div>
  );
};
