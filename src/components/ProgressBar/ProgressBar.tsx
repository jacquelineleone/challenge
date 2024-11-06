import { useFormContext } from "../../context";
import styles from "./styles.module.css";

export const ProgressBar = () => {
  const { currentStep } = useFormContext();
  const progressPercent = (currentStep / 5) * 100;

  return (
    <div className={styles.barContainer}>
      <div
        className={styles.percent}
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
};
