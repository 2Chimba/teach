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

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={styles.input__area}
    >
      <input
        type="text"
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
        className={styles.input__text}
        placeholder="Введите задачу"
        autoFocus
      />
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
        Создать задачу
      </button>
    </motion.div>
  );
};
