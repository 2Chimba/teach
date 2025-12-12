<<<<<<< HEAD
import type { Task } from "../../Interfaces/interfaces";
import styles from "./cartText.module.css";

interface IText {
  item: Task;
}

=======
import type { IText } from "../../Interfaces/interfaces";
import styles from "./cartText.module.css";

>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
export const CartText = ({ item }: IText) => {
  return (
    <div
      className={`${styles.cart__text} ${item.done ? styles.done : styles[""]}`}
    >
      {item.text}
    </div>
  );
};
