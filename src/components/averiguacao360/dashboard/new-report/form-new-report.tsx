import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// import { Button } from "@/components/ui/button"
import { Form } from '@/components/ui/form';

import { ModelFormNewReport } from './model-form-new-report';
import { BaseInfoNewReport } from './steps-new-report/base-info-new-report';
import { SelectStepsNewReport } from './steps-new-report/select-steps-new-report';
import { SelectUsersNewReport } from './steps-new-report/select-users-new-report';

const formSchema = z
  .object({
    n_processo: z.string().min(8, {
      message: 'Favor informar o número do processo.'
    }),
    natureza_sinistro: z.string().min(8, {
      message: 'Favor informar a natureza do sinistro.'
    }),
    cnpj: z.string().min(8, {
      message: 'Favor informar o CNPJ.'
    }),
    cliente_segurado: z.string().min(8, {
      message: 'Favor informar o cliente segurado.'
    }),
    caracteristica_sinistro: z.string().min(8, {
      message: 'Favor informar a característica do sinistro.'
    }),
    analistas_responsaveis: z.string().min(8, {
      message: 'Favor informar os analistas responsáveis.'
    })
  })
  .required();

const sourceSteps = [
  {
    label: 'Informações básicas',
    Component: <BaseInfoNewReport />,
    fields: ['n_processo', 'natureza_sinistro', 'cnpj', 'cliente_segurado'],
    hasError: false
  },
  {
    label: 'Etapas do relatório',
    Component: <SelectStepsNewReport />,
    fields: ['caracteristica_sinistro'],
    hasError: false
  },
  {
    label: 'Analistas Responsáveis',
    Component: <SelectUsersNewReport />,
    fields: ['analistas_responsaveis'],
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

export function FormNewReport() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      n_processo: '',
      natureza_sinistro: '',
      cnpj: '',
      cliente_segurado: '',
      caracteristica_sinistro: '',
      analistas_responsaveis: ''
    }
  });

  if (methods.formState.isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-lightMode-colors-blue-400">
          Relatório criado com sucesso!
        </h1>
        <p className="text-sm text-muted-foreground">
          Agora você pode adicionar os analistas responsáveis e as etapas do
          relatório.
        </p>
      </div>
    );
  }

  const steps = getSteps(Object.keys(methods.formState.errors));

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        <ModelFormNewReport items={steps} />
      </form>
    </Form>
  );
}
