import { ReactNode } from "react";
import { NavigationButtons, SubmitButton } from "..";
import { useFormContext } from "../../context";
import styles from "./styles.module.css";

interface Props {
  steps: ReactNode[];
}

export const Form = ({ steps }: Props) => {
  const { currentStep, totalSteps, handleSubmit } = useFormContext();

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        {steps[currentStep]}

        {currentStep === totalSteps - 1 ? (
          <SubmitButton />
        ) : (
          <NavigationButtons />
        )}
      </form>
    </div>
  );
};
