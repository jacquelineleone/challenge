import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import guy from "../../assets/images/smiling-guy.svg";
import { useFormContext } from "../../context";

export const Hero = () => {
  const { currentStep, totalSteps } = useFormContext();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.steps}>
        <p className={styles.currentStep}>0{currentStep + 1}</p>
        <div className={styles.line}></div>
        <p className={styles.totalSteps}>0{totalSteps}</p>
      </div>
      <div className={styles.imagesContainer}>
        <img
          src={logo}
          alt="Customer Scoops logo"
          loading="lazy"
          className={styles.logoImage}
        />
        <div className={styles.guyImageContainer}>
          <img
            src={guy}
            alt="Chico sonriente"
            loading="lazy"
            className={styles.guyImage}
          />
        </div>
      </div>
    </div>
  );
};
