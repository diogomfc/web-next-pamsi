import { FormInput } from '../form-input';

export interface componentProps {}

export function BaseInfoNewReport() {
  return (
    <div className="px-8 pb-4">
      <div className="pt-2 pb-4 border rounded-sm bg-lightMode-colors-blue-50/10 border-lightMode-colors-blue-100 shadow-Box_Form">
        <FormInput
          name="n_processo"
          label="Número do processo"
          description="Insira o número do processo gerado pela torre de operações."
          placeholder="Número do processo"
        />
        <FormInput
          name="natureza_sinistro"
          label="Natureza do sinistro"
          description="Detalhe a natureza do evento do sinistro."
          placeholder="Natureza do sinistro"
        />
        <FormInput
          name="cnpj"
          label="CNPJ"
          description="Insira o CNPJ."
          placeholder="CNPJ"
        />
        <FormInput
          name="cliente_segurado"
          label="Segurado"
          description="Insira o nome completo do cliente segurado."
          placeholder="Segurado"
        />
      </div>
    </div>
  );
}
