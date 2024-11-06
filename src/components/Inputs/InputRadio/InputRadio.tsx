import styles from "./styles.module.css";

interface Props {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadio = ({ name, value, checked, onChange }: Props) => {
  return (
    <div className={`${styles.inputRadio} ${checked ? styles.active : ""}`}>
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
