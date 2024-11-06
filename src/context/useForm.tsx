import { createContext, ReactNode, useContext, useState } from "react";

interface FormData {
  name: string;
  position: string;
  goal: string;
  companyCRM: string;
  companyIndustry: string;
}

const defaultFormData: FormData = {
  name: "",
  position: "",
  goal: "",
  companyCRM: "",
  companyIndustry: "",
};

interface FormContextType {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  previousStep: () => void;
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormData: (data: FormData) => void;
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
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const nextStep = () =>
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));

  const previousStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        totalSteps: totalSteps,
        nextStep,
        previousStep,
        formData,
        handleChange,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
