import { InputRadio } from "../../";
import styles from "./styles.module.css";

interface Option {
  value: string;
  identifier?: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({
  name,
  label,
  options,
  selectedValue,
  onChange,
}: Props) => {
  return (
    <div className={styles.group}>
      <label>{label}</label>
      <div className={styles.inputsContainer}>
        {options.map((option) => (
          <InputRadio
            key={option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            size={option.identifier ? "large" : "small"}
          >
            {option.identifier && (
              <div className={styles.inputChild}>{option.identifier}</div>
            )}
          </InputRadio>
        ))}
      </div>
    </div>
  );
};
