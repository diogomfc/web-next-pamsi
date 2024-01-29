import { useSearchParams } from 'next/navigation';

import { FormName } from '@/types/reportTypesForm';

export function useParamsFormName() {
  const searchParams = useSearchParams();
  const form = searchParams.get('form');

  return form === 'form1_Cliente_Segurado'
    ? FormName.form1_Cliente_Segurado
    : form === 'form2_Caracteristica_Sinistro'
      ? FormName.form2_Caracteristica_Sinistro
      : form === 'form3_Cronologia_Sinistro'
        ? FormName.form3_Cronologia_Sinistro
        : form === 'form4_Do_Carregamento'
          ? FormName.form4_Do_Carregamento
          : form === 'form5_Motorista'
            ? FormName.form5_Motorista
            : form === 'form6_Ajudantes'
              ? FormName.form6_Ajudantes
              : form === 'form7_Veiculo_Transportador'
                ? FormName.form7_Veiculo_Transportador
                : form === 'form8_Orgao_Policial'
                  ? FormName.form8_Orgao_Policial
                  : form === 'form9_Gerenciamento_Risco_Veiculo'
                    ? FormName.form9_Gerenciamento_Risco_Veiculo
                    : form === 'form10_Sistemas_Protecao_Carregamento'
                      ? FormName.form10_Sistemas_Protecao_Carregamento
                      : form === 'form11_Declaracao_Motorista_Ajudante'
                        ? FormName.form11_Declaracao_Motorista_Ajudante
                        : form === 'form12_Gerenciamento_Risco_Deposito'
                          ? FormName.form12_Gerenciamento_Risco_Deposito
                          : form === 'form13_Locais_Evento'
                            ? FormName.form13_Locais_Evento
                            : form === 'form14_Resumo_Averiguacoes'
                              ? FormName.form14_Resumo_Averiguacoes
                              : form === 'form15_Recuperacao_Carga'
                                ? FormName.form15_Recuperacao_Carga
                                : form === 'form16_Anexos_Fotograficos'
                                  ? FormName.form16_Anexos_Fotograficos
                                  : form === 'form17_Conclusao'
                                    ? FormName.form17_Conclusao
                                    : '';
}
