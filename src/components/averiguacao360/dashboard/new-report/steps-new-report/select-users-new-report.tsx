import { FormInput } from '../form-input';

export interface componentProps {}

export function SelectUsersNewReport() {
  return (
    <div className="px-8 pb-4">
      <div className="pt-2 pb-4 border rounded-sm bg-lightMode-colors-blue-50/10 border-lightMode-colors-blue-100 shadow-Box_Form">
        <FormInput
          name="analistas_responsaveis"
          label="Analistas Responsáveis"
          description="Selecione os analistas responsáveis"
          placeholder="Analistas Responsáveis"
        />
      </div>
    </div>
  );
}
