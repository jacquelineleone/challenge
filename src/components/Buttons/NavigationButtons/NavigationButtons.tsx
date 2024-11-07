import { useFormContext } from "../../../context";
import { Button } from "../";
import backArrow from "../../../assets/images/back-arrow.svg";
import styles from "./styles.module.css";

export const NavigationButtons = () => {
  const { currentStep, totalSteps, nextStep, previousStep } = useFormContext();

  const getNextButtonText = () => {
    if (currentStep === 0) return "Comenzar";
    if (currentStep === totalSteps - 1) return "Finalizar";
    return "Siguiente";
  };

  const isPrevButtonVisible = () => currentStep > 0 && currentStep < totalSteps - 1;

  return (
    <div className={styles.buttons}>
      {isPrevButtonVisible() && (
        <Button
          parentMethod={previousStep}
          className={styles.previousButton}
        >
          <img src={backArrow} alt="volver" loading="lazy" />
        </Button>
      )}
      <Button parentMethod={nextStep} className={styles.nextButton}>
        <p>{getNextButtonText()}</p>
      </Button>
    </div>
  );
};
