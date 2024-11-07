import { RadioGroup } from "../../components";
import { useFormContext } from "../../context";
import styles from "./styles.module.css";

export const Step2 = () => {
  const { formData, handleChange } = useFormContext();

  const options = [
    { value: "Board member" },
    { value: "C-level" },
    { value: "Gerente" },
    { value: "Subgerente" },
    { value: "Jefe área" },
    { value: "Líder de área" },
    { value: "Ejecutivo" },
    { value: "Analista" },
    { value: "Otro" },
  ];

  return (
    <div className={styles.stepContainer}>
      <p>
        <b>Genial {formData.name}</b>, ahora nos gustaría tener cierta info para
        diseñar una gran propuesta de valor para ti:
      </p>

      <RadioGroup
        name="position"
        label="¿Cuál es tu cargo/posición dentro de tu empresa?"
        options={options}
        selectedValue={formData.position}
        onChange={handleChange}
      />
    </div>
  );
};
