import { FormInput } from '../form-input';

export interface componentProps {}

export function SelectStepsNewReport() {
  return (
    <div className="px-8 pb-4">
      <div className="pt-2 pb-4 border rounded-sm bg-lightMode-colors-blue-50/10 border-lightMode-colors-blue-100 shadow-Box_Form">
        <FormInput
          name="caracteristica_sinistro"
          label="Característica do Sinistro"
          description="Selecione a característica do sinistro"
          placeholder="Característica do Sinistro"
        />
      </div>
    </div>
  );
}
