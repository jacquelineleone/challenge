import { Button } from "../Button";
import styles from "./styles.module.css";

interface Props {
  parentMethod: () => void;
}

export const NextButton = ({ parentMethod }: Props) => {
  return (
    <Button parentMethod={parentMethod} className={styles.nextButton}>
      <div>Siguiente</div>
    </Button>
  );
};
