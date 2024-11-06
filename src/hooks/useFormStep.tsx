import { ReactElement, useState } from "react";

export function useFormStep(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    nextStep,
    previousStep,
  };
}
