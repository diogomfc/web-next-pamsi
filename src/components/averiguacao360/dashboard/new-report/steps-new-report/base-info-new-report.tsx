import { Search } from 'lucide-react';

import { FormInput } from '../form-input';
import { FormRadioGroup } from '../form-radio-group';

export interface componentProps {}

export enum Natureza_Sinistro {
  Roubo = 'Roubo',
  Furto = 'Furto',
  Apreensão = 'Apreensão',
  Outros = 'Outros'
}

export function BaseInfoNewReport() {
  return (
    <div className="px-4 py-2 border rounded-lg border-lightMode-colors-blue-100 shadow-Box_Form">
      <FormInput
        name="numero_processo"
        label="Número do processo"
        description="Insira o número do processo gerado pela torre de operações."
        placeholder="Número do processo"
      />
      <FormRadioGroup
        name="natureza_sinistro"
        label="Natureza do Sinistro"
        description="Selecione a natureza do sinistro"
        options={Object.keys(Natureza_Sinistro).map((key) => ({
          value: key,
          label: key
        }))}
      />
      <FormInput
        name="cnpj"
        label="CNPJ"
        description="Insira o CNPJ."
        placeholder="CNPJ"
        rightIcon={<Search />}
      />
      <FormInput
        name="cliente"
        label="Segurado"
        description="Insira o nome completo do cliente segurado."
        placeholder="Segurado"
      />
    </div>
  );
}
