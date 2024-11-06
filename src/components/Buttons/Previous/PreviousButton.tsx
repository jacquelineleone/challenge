import { Button } from "../Button";
import styles from "./styles.module.css";
import backArrow from "../../../assets/images/back-arrow.svg";

interface Props {
  parentMethod: () => void;
}

export const PreviousButton = ({ parentMethod }: Props) => {
  return (
    <Button parentMethod={parentMethod} className={styles.previousButton}>
      <div>
        <img src={backArrow} alt="volver" loading="lazy" />
      </div>
    </Button>
  );
};
