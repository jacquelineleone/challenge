import { FormProvider } from "../../context";
import {
  Form,
  FormNavigation,
  ProgressBar,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from "../../components";
import styles from "./styles.module.css"

export default function FormPage() {
  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
  ];
  return (
    <FormProvider totalSteps={steps.length}>
      <div className={styles.formPage}>
        <ProgressBar />
        <FormNavigation />
        <Form steps={steps} />
      </div>
    </FormProvider>
  );
}
