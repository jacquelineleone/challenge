import { RadioGroup } from "../../components";
import { useFormContext } from "../../context";

export const Step5 = () => {
  const { formData, handleChange } = useFormContext();
  const options = [
    { value: "Tecnología" },
    { value: "Servicios" },
    { value: "Telecomunicaciones" },
    { value: "Logística" },
    { value: "Mayorista" },
    { value: "Software" },
    { value: "Financiera" },
    { value: "Producción/ Fabricación" },
    { value: "Consumo Masivo" },
    { value: "Retail" },
    { value: "Otra" },
  ];

  return (
    <div>
      <p>
        <b>Ahora te vamos a sorprender...</b>
      </p>
      <RadioGroup
        name="companyIndustry"
        label="¿A cuál industria pertenece tu empresa?"
        options={options}
        selectedValue={formData.companyIndustry}
        onChange={handleChange}
      />
    </div>
  );
};
