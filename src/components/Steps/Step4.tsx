import { RadioGroup } from "../../components";
import { useFormContext } from "../../context";

export const Step4 = () => {
  const { formData, handleChange } = useFormContext();
  const options = [
    { value: "SAP" },
    { value: "Salesforce" },
    { value: "Zoho" },
    { value: "Monday" },
    { value: "Microsoft Dynamics" },
    { value: "Hubspot" },
    { value: "Netsuite (Oracle)" },
    { value: "CRM Propio" },
    { value: "No tengo CRM" },
  ];

  return (
    <div>
      <RadioGroup
        name="companyCRM"
        label="¿Cuál CRM están utilizando en tu empresa? CRM:"
        options={options}
        selectedValue={formData.companyCRM}
        onChange={handleChange}
      />
    </div>
  );
};
