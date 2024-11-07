import { InputText } from "../../components";
import { useFormContext } from "../../context";
import styles from "./styles.module.css";

export const Step1 = () => {
  const { formData, handleChange } = useFormContext();

  return (
    <div className={styles.stepContainer}>
      <p>
        Muchas gracias por tu interés en conocer <b>customerScoops</b>, que a
        través de Formularios Conversacionales Inteligente te ayudamos a
        aumentar el revenue y rentabilidad de tu negocio.
      </p>

      <InputText
        name="name"
        label="Queremos conocerte, ¿cuál es tu nombre?"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
  );
};
