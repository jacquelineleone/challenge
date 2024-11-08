import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "large";
  children?: ReactNode;
}

export const InputRadio = ({
  name,
  value,
  checked,
  onChange,
  size,
  children,
}: Props) => {
  return (
    <div
      className={`${styles.inputRadio} ${styles[size]} ${
        checked ? styles.active : ""
      }`}
    >
      {children}
      <label>{value}</label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
