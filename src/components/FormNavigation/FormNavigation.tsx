import { useEffect, useRef } from "react";
import { useFormContext } from "../../context";
import gsap from "gsap";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import guy from "../../assets/images/smiling-guy.svg";

export const FormNavigation = () => {
  const { currentStep, totalSteps } = useFormContext();
  const stepRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      stepRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <div className={styles.steps}>
          <span className={styles.mask}>
            <p className={styles.currentStep} ref={stepRef}>
              0{currentStep + 1}
            </p>
          </span>
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
    </div>
  );
};
