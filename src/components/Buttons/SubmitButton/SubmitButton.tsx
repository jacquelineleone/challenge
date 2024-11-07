import styles from "./styles.module.css";

export const SubmitButton = () => {
  return (
    <button type="submit" className={styles.submitButton}>
      <p>Finalizar</p>
    </button>
  );
};
