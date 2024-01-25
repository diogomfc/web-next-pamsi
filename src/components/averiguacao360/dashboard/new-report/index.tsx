import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import { AuthContext } from '@/contexts/AuthContext';
import { getCNPJData } from '@/services/get-cnpj';
import userService from '@/services/users-services';
import { Tipo_Formulario } from '@/types/reportTypes';
import { UserType } from '@/types/userTypes';

import { ModelFormNewReport } from './model-form-new-report';
import { BaseInfoNewReport } from './steps-new-report/base-info-new-report';
import { SelectFormsNewReport } from './steps-new-report/select-forms-new-report';
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

const defaultFormValues = {
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
};

// extração dos formulários selecionados de forma dinâmica
const createFormSelected = (formValues: Tipo_Formulario) => {
  const formSelected = Object.keys(formValues)
    .filter(
      (key) =>
        key.startsWith('form') && formValues[key as keyof Tipo_Formulario]
    )
    .map((key) => {
      const formNumberMatch = key.match(/\d+/);
      const formNumber = formNumberMatch ? parseInt(formNumberMatch[0], 10) : 0;
      const formName = key
        .replace(/_/g, ' ')
        .replace('form', '')
        .replace(/\d+/g, '')
        .trim();
      return {
        idFormName: key,
        NumberForm: formNumber,
        formName: formName
      };
    });

  return { formSelected };
};

const extractSelectedForms = (values: Tipo_Formulario) => {
  return createFormSelected(values);
};

// fonte de dados para os passos do formulário
const sourceSteps = [
  {
    label: 'Informações básicas',
    Component: <BaseInfoNewReport />,
    fields: ['numero_processo', 'natureza_sinistro', 'cnpj', 'cliente']
  },
  {
    label: 'Formulários do relatório',
    Component: <SelectFormsNewReport />,
    fields: [
      'formularios_selecionados',
      ...Object.keys(defaultFormValues).filter((key) => key.startsWith('form'))
    ]
  },
  {
    label: 'Grupo investigativo',
    Component: <SelectUsersNewReport />,
    fields: ['usuarios_permitidos']
  }
].map((step) => ({ ...step, hasError: false }));

export function FormGetNewReport() {
  const { usuario } = useContext(AuthContext);

  // useState para armazenar todos os usuários e usuários selecionados
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  // const [groupUsersSelected, setGroupUsersSelected] = useState<UserType[]>([]);

  // Método do react-hook-form
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: defaultFormValues
  });

  //Busca no getValues os id dos usuários selecionados
  const id_usuarios_permitidos = methods.getValues('usuarios_permitidos');
  const idObjects = id_usuarios_permitidos.map((id) => ({ id }));
  const grupo_usuarios_permitidos = allUsers.filter((user) =>
    idObjects.some((obj) => obj.id === user.id)
  );
  // console.log('Objeto ID', idObjects);
  // console.log('Todos Usuários:', allUsers);
  console.log('Grupo Averiguação:', grupo_usuarios_permitidos);

  //Função para buscar todos os usuários
  useEffect(() => {
    const fetchUsuariosPermitidos = async () => {
      try {
        const data = await userService.getAllUsers();
        //filtro todos os usuário e removo o usuário logado
        const usuariosPermitidos = data.filter(
          (user: UserType) => user.id !== usuario?.id
        );
        setAllUsers(usuariosPermitidos);
      } catch (error) {
        console.error('Erro ao obter usuários permitidos:', error);
      }
    };
    fetchUsuariosPermitidos();
  }, [usuario]);

  //Busca de CNPJ
  const { watch, setValue } = methods;
  const cnpj = watch('cnpj');
  const cnpjRef = useRef(cnpj);

  useEffect(() => {
    const fetchCNPJData = async () => {
      try {
        const data = await getCNPJData({ cnpj });
        if (cnpjRef.current === cnpj) {
          setValue('cliente', data?.razao_social || '');
        }
      } catch (error) {
        console.error('Erro ao obter dados do CNPJ:', error);
      }
    };

    cnpjRef.current = cnpj;

    if (cnpj) {
      fetchCNPJData();
    } else {
      setValue('cliente', '');
    }
  }, [cnpj, setValue]);

  // Verifica se o formulário foi submetido com sucesso e exibe mensagem de sucesso
  if (methods.formState.isSubmitSuccessful) {
    const { formSelected } = extractSelectedForms(methods.getValues());

    // Ordena formSelected por NumberForm
    const newFormSelected = formSelected.sort(
      (a, b) => a.NumberForm - b.NumberForm
    );

    return (
      <>
        <SubmitSuccessfulNewReport
          numero_processo={methods.getValues('numero_processo')}
          cliente={methods.getValues('cliente')}
          data_entrada={new Date().toISOString()}
          usuario_responsavel={{
            id: usuario?.id || '',
            nome: usuario?.nome || '',
            email: usuario?.email || '',
            telefone: usuario?.telefone || '',
            avatar: usuario?.avatar || '',
            funcao: usuario?.funcao || '',
            criado_em: usuario?.criado_em || ''
          }}
          usuarios_permitidos={
            grupo_usuarios_permitidos.map((user) => ({
              id: user.id,
              nome: user.nome,
              email: user.email,
              telefone: user.telefone,
              avatar: user.avatar,
              funcao: user.funcao,
              criado_em: user.criado_em
            })) || []
          }
          formularios_selecionados={newFormSelected.map((form, index) => {
            return {
              idFormName: form.idFormName,
              formName: form.formName,
              step: index + 1
            };
          })}
        />
      </>
    );
  }

  const formSteps = sourceSteps;

  // Função de submissão de criação de relatório
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { formSelected } = extractSelectedForms(values);
    const formularios_selecionados = formSelected.map(
      (item) => item.idFormName
    );

    //const usuarios_permitidos = values.usuarios_permitidos;
    //console.log('Usuários permitidos:', usuarios_permitidos);

    const updatedValues = { ...values, formularios_selecionados };
    //console.log('Valores do formulário:', updatedValues);

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
        <ModelFormNewReport items={formSteps} />
      </form>
    </Form>
  );
}
