import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import { getCNPJData } from '@/services/get-cnpj';

//import { createReport } from '@/services/report-services';
import { ModelFormNewReport } from './model-form-new-report';
import { BaseInfoNewReport } from './steps-new-report/base-info-new-report';
import { SelectStepsNewReport } from './steps-new-report/select-steps-new-report';
import { SelectUsersNewReport } from './steps-new-report/select-users-new-report';
import { SubmitSuccessfulNewReport } from './steps-new-report/submit-successful-new-report';

const formSchema = z
  .object({
    numero_processo: z.string().min(8, {
      message: 'Informe o Nº do processo gerado pela torre de operações.'
    }),
    natureza_sinistro: z.enum(['Roubo', 'Furto', 'Apreensão', 'Outros'], {
      required_error: 'Selecione a natureza do sinistro.'
    }),
    cnpj: z.string().min(8, {
      message: 'O campo CNPJ é obrigatório'
    }),
    cliente: z.string().min(8, {
      message: 'Favor informar o nome do cliente segurado.'
    }),
    form1_Cliente_Segurado: z.boolean(),
    form2_Caracteristica_Sinistro: z.boolean(),
    form3_Cronologia_Sinistro: z.boolean(),
    form4_Do_Carregamento: z.boolean(),
    form5_Motorista: z.boolean(),
    form6_Ajudantes: z.boolean(),
    form7_Veiculo_Transportador: z.boolean(),
    form8_Orgao_Policial: z.boolean(),
    form9_Gerenciamento_Risco_Veiculo: z.boolean(),
    form10_Sistemas_Protecao_Carregamento: z.boolean(),
    form11_Declaracao_Motorista_Ajudante: z.boolean(),
    form12_Gerenciamento_Risco_Deposito: z.boolean(),
    form13_Locais_Evento: z.boolean(),
    form14_Resumo_Averiguacoes: z.boolean(),
    form15_Recuperacao_Carga: z.boolean(),
    form16_Anexos_Fotograficos: z.boolean(),
    form17_Conclusao: z.boolean(),
    usuarios_permitidos: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: 'Selecione pelo menos um analista no grupo'
      })
  })
  .required();

const sourceSteps = [
  {
    label: 'Informações básicas',
    Component: <BaseInfoNewReport />,
    fields: ['numero_processo', 'natureza_sinistro', 'cnpj', 'cliente'],
    hasError: false
  },
  {
    label: 'Formulários do relatório',
    Component: <SelectStepsNewReport />,
    fields: [
      'form1_Cliente_Segurado',
      'form2_Caracteristica_Sinistro',
      'form3_Cronologia_Sinistro',
      'form4_Do_Carregamento',
      'form5_Motorista',
      'form6_Ajudantes',
      'form7_Veiculo_Transportador',
      'form8_Orgao_Policial',
      'form9_Gerenciamento_Risco_Veiculo',
      'form10_Sistemas_Protecao_Carregamento',
      'form11_Declaracao_Motorista_Ajudante',
      'form12_Gerenciamento_Risco_Deposito',
      'form13_Locais_Evento',
      'form14_Resumo_Averiguacoes',
      'form15_Recuperacao_Carga',
      'form16_Anexos_Fotograficos',
      'form17_Conclusao'
    ],
    hasError: false
  },
  {
    label: 'Grupo investigativo',
    Component: <SelectUsersNewReport />,
    fields: ['usuarios_permitidos'],
    hasError: false
  }
];

const getSteps = (errors: string[]) => {
  return sourceSteps.map((step) => {
    return {
      ...step,
      hasError: errors.some((error) => step.fields.includes(error))
    };
  });
};

export function FormGetNewReport() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      numero_processo: '',
      cnpj: '',
      cliente: '',
      form1_Cliente_Segurado: true,
      form2_Caracteristica_Sinistro: false,
      form3_Cronologia_Sinistro: false,
      form4_Do_Carregamento: false,
      form5_Motorista: false,
      form6_Ajudantes: false,
      form7_Veiculo_Transportador: false,
      form8_Orgao_Policial: false,
      form9_Gerenciamento_Risco_Veiculo: false,
      form10_Sistemas_Protecao_Carregamento: false,
      form11_Declaracao_Motorista_Ajudante: false,
      form12_Gerenciamento_Risco_Deposito: false,
      form13_Locais_Evento: false,
      form14_Resumo_Averiguacoes: false,
      form15_Recuperacao_Carga: false,
      form16_Anexos_Fotograficos: false,
      form17_Conclusao: true,
      usuarios_permitidos: []
    }
  });

  const { watch, setValue } = methods;
  const cnpj = watch('cnpj');
  const cnpjRef = useRef(cnpj);

  useEffect(() => {
    cnpjRef.current = cnpj;
    if (cnpj) {
      getCNPJData({ cnpj }).then((data) => {
        if (cnpjRef.current === cnpj) {
          if (data && data.razao_social) {
            setValue('cliente', data.razao_social);
          } else {
            setValue('cliente', '');
          }
        }
      });
    } else {
      setValue('cliente', '');
    }
  }, [cnpj, setValue]);

  if (methods.formState.isSubmitSuccessful) {
    return <SubmitSuccessfulNewReport />;
  }

  const steps = getSteps(Object.keys(methods.formState.errors));

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Extrai os valores de formularios_selecionados
    const {
      form1_Cliente_Segurado,
      form2_Caracteristica_Sinistro,
      form3_Cronologia_Sinistro,
      form4_Do_Carregamento,
      form5_Motorista,
      form6_Ajudantes,
      form7_Veiculo_Transportador,
      form8_Orgao_Policial,
      form9_Gerenciamento_Risco_Veiculo,
      form10_Sistemas_Protecao_Carregamento,
      form11_Declaracao_Motorista_Ajudante,
      form12_Gerenciamento_Risco_Deposito,
      form13_Locais_Evento,
      form14_Resumo_Averiguacoes,
      form15_Recuperacao_Carga,
      form16_Anexos_Fotograficos,
      form17_Conclusao
    } = values;

    // Cria um array com os formulários selecionados
    const formularios_selecionados = [];
    if (form1_Cliente_Segurado) {
      formularios_selecionados.push('form1_Cliente_Segurado');
    }
    if (form2_Caracteristica_Sinistro) {
      formularios_selecionados.push('form2_Caracteristica_Sinistro');
    }
    if (form3_Cronologia_Sinistro) {
      formularios_selecionados.push('form3_Cronologia_Sinistro');
    }
    if (form4_Do_Carregamento) {
      formularios_selecionados.push('form4_Do_Carregamento');
    }
    if (form5_Motorista) {
      formularios_selecionados.push('form5_Motorista');
    }
    if (form6_Ajudantes) {
      formularios_selecionados.push('form6_Ajudantes');
    }
    if (form7_Veiculo_Transportador) {
      formularios_selecionados.push('form7_Veiculo_Transportador');
    }
    if (form8_Orgao_Policial) {
      formularios_selecionados.push('form8_Orgao_Policial');
    }
    if (form9_Gerenciamento_Risco_Veiculo) {
      formularios_selecionados.push('form9_Gerenciamento_Risco_Veiculo');
    }
    if (form10_Sistemas_Protecao_Carregamento) {
      formularios_selecionados.push('form10_Sistemas_Protecao_Carregamento');
    }
    if (form11_Declaracao_Motorista_Ajudante) {
      formularios_selecionados.push('form11_Declaracao_Motorista_Ajudante');
    }
    if (form12_Gerenciamento_Risco_Deposito) {
      formularios_selecionados.push('form12_Gerenciamento_Risco_Deposito');
    }
    if (form13_Locais_Evento) {
      formularios_selecionados.push('form13_Locais_Evento');
    }
    if (form14_Resumo_Averiguacoes) {
      formularios_selecionados.push('form14_Resumo_Averiguacoes');
    }
    if (form15_Recuperacao_Carga) {
      formularios_selecionados.push('form15_Recuperacao_Carga');
    }
    if (form16_Anexos_Fotograficos) {
      formularios_selecionados.push('form16_Anexos_Fotograficos');
    }
    if (form17_Conclusao) {
      formularios_selecionados.push('form17_Conclusao');
    }

    // Adiciona o array aos valores do formulário
    const updatedValues = { ...values, formularios_selecionados };
    console.log('Valores do formulário:', updatedValues);
    try {
      //const response = await createReport(updatedValues);
      console.log('Relatório criado com sucesso:', updatedValues);
    } catch (error) {
      console.error('Erro ao criar relatório:', error);
    }
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        <ModelFormNewReport items={steps} />
      </form>
    </Form>
  );
}
