import { RadioGroup } from "../../components";
import { useFormContext } from "../../context";

export const Step3 = () => {
  const { formData, handleChange } = useFormContext();

  const options = [
    { value: "Aumentar conversión de leads a clientes", identifier: "A" },
    { value: "Reducir customer churn", identifier: "B" },
    { value: "Implementar un programa VoC", identifier: "C" },
    { value: "Reducir costos en gestión de reclamos", identifier: "D" },
    { value: "Optimizar procesos comerciales", identifier: "E" },
    { value: "Optimizar procesos operativos", identifier: "F" },
    { value: "Otro", identifier: "G" },
  ];

  return (
    <div>
      <RadioGroup
        name="goal"
        label="¿Cuáles son tus principales desafíos para 2024?"
        options={options}
        selectedValue={formData.goal}
        onChange={handleChange}
      />
    </div>
  );
};
