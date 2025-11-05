import type { IText } from "../../../../constants/interfaces";
import styles from "./cartText.module.css";

export const CartText = ({ item }: IText) => {
  return (
    <div
      className={`${styles.cart__text} ${item.done ? styles.done : styles[""]}`}
    >
      {item.text}
    </div>
  );
};
