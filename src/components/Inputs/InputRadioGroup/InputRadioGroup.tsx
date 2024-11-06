import { InputRadio } from "../";
import styles from "./styles.module.css";

interface Props {
  name: string;
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadioGroup = ({
  name,
  label,
  options,
  selectedValue,
  onChange,
}: Props) => {
  return (
    <div>
      <label>{label}</label>
      <div className={styles.group}>
        {options.map((option) => (
          <InputRadio
            key={option}
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};
