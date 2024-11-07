import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

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
  errors: Record<string, string>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 0 && !formData.name)
      newErrors.name = "El nombre es requerido";
    if (currentStep === 1 && !formData.position)
      newErrors.position = "La posición es requerida";

    if (currentStep === 2 && !formData.goal)
      newErrors.goal = "El objetivo es requerido";
    if (currentStep === 3 && !formData.companyCRM)
      newErrors.companyCRM = "El CRM de la empresa es requerido";
    if (currentStep === 4 && !formData.companyIndustry)
      newErrors.companyIndustry = "La industria de la empresa es requerida";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [formData, currentStep]);

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
    }
  };

  const previousStep = () =>
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      window.location.href = "https://www.customerscoops.com/";
    }
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        totalSteps: totalSteps,
        nextStep,
        previousStep,
        formData,
        errors,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
