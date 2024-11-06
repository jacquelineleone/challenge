import { createContext, ReactNode, useContext, useState } from "react";

interface FormContextType {
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

interface FormProps {
  children: ReactNode;
  totalSteps: number;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormContext must be used within a FormProvider");
  }

  return context;
};

export const FormProvider = ({ children, totalSteps }: FormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () =>
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));

  const previousStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <FormContext.Provider value={{ currentStep, nextStep, previousStep }}>
      {children}
    </FormContext.Provider>
  );
};
