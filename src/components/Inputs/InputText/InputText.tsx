import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  name,
  label,
  placeholder = "",
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles.inputText}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
