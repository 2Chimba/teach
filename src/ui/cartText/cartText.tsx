import type { Task } from "../../Interfaces/interfaces";
import styles from "./cartText.module.css";

interface IText {
  item: Task;
}

export const CartText = ({ item }: IText) => {
  return (
    <div
      className={`${styles.cart__text} ${item.done ? styles.done : styles[""]}`}
    >
      {item.text}
    </div>
  );
};
