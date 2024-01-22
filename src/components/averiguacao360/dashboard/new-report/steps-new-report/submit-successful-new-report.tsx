import { Calendar, Trash, User } from 'lucide-react';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export interface SubmitSuccessfulNewReportProps {}

const forms = [
  {
    name: 'form1_Cliente_Segurado',
    etapa: 1,
    label: 'Segurado',
    description:
      'Informações sobre a parte segurada, incluindo nome, endereço e detalhes da apólice de seguro associada.'
  },
  {
    name: 'form2_Caracteristica_Sinistro',
    etapa: 2,
    label: 'Característica do Sinistro',
    description:
      'Detalhes sobre a natureza e extensão do sinistro, incluindo data, hora e qualquer dano observado.'
  },
  {
    name: 'form3_Cronologia_Sinistro',
    etapa: 3,
    label: 'Cronologia do Sinistro',
    description:
      'Sequência temporal dos eventos relacionados ao sinistro, destacando a ordem e os horários das atividades relevantes.'
  },
  {
    name: 'form4_Do_Carregamento',
    etapa: 4,
    label: 'Do Carregamento',
    description:
      'Detalhes sobre o processo de carregamento, incluindo local, responsáveis e métodos utilizados.'
  },
  {
    name: 'form5_Motorista',
    etapa: 5,
    label: 'Motorista',
    description:
      'Informações sobre o condutor envolvido, incluindo nome, licença, histórico e quaisquer observações pertinentes.'
  },
  {
    name: 'form6_Ajudantes',
    etapa: 6,
    label: 'Ajudantes',
    description:
      'Detalhes sobre qualquer pessoa auxiliando no processo, incluindo identificação, papel e envolvimento.'
  },
  {
    name: 'form7_Veiculo_Transportador',
    etapa: 7,
    label: 'Veículo Transportador',
    description:
      'Informações sobre o veículo utilizado para transportar a carga, incluindo placa, modelo e condição.'
  },
  {
    name: 'form8_Orgao_Policial',
    etapa: 8,
    label: 'Órgão Policial',
    description:
      'Registro de qualquer envolvimento das autoridades policiais, incluindo relatórios e documentos fornecidos.'
  },
  {
    name: 'form9_Gerenciamento_Risco_Veiculo',
    etapa: 9,
    label: 'Gerenciamento de Risco – Veículo',
    description:
      'Avaliação das medidas de segurança tomadas em relação ao veículo envolvido no sinistro.'
  },
  {
    name: 'form10_Sistemas_Protecao_Carregamento',
    etapa: 10,
    label: 'Sistemas Protecionais do Carregamento',
    description:
      'Descrição dos sistemas de segurança implementados durante o carregamento da carga.'
  },
  {
    name: 'form11_Declaracao_Motorista_Ajudante',
    etapa: 11,
    label: 'Declaração do Motorista e Ajudante(s)',
    description:
      'Relatos formais do condutor e outros envolvidos, descrevendo sua perspectiva sobre os eventos.'
  },
  {
    name: 'form12_Gerenciamento_Risco_Deposito',
    etapa: 12,
    label: 'Gerenciamento de Risco – Depósito',
    description:
      'Avaliação das medidas de segurança no local de armazenamento ou depósito da carga.'
  },
  {
    name: 'form13_Locais_Evento',
    etapa: 13,
    label: 'Locais do Evento',
    description:
      'Mapeamento e descrição dos locais relacionados ao sinistro, incluindo coordenadas geográficas se aplicável.'
  },
  {
    name: 'form14_Resumo_Averiguacoes',
    etapa: 14,
    label: 'Das Averiguações',
    description:
      'Resultados e conclusões preliminares de todas as investigações realizadas até o momento.'
  },
  {
    name: 'form15_Recuperacao_Carga',
    etapa: 15,
    label: 'Recuperação da Carga',
    description:
      'Estratégias e ações empreendidas para recuperar a carga perdida ou danificada.'
  },
  {
    name: 'form16_Anexos_Fotograficos',
    etapa: 16,
    label: 'Anexos Fotográficos',
    description:
      'Registro visual através de fotografias que documentam o sinistro, locais e evidências relevantes.'
  },
  {
    name: 'form17_Conclusao',
    etapa: 17,
    label: 'Conclusão',
    description:
      'Resumo geral das descobertas e recomendações para a resolução do sinistro.'
  }
];

const grupoUsersAveriguacao = [
  {
    id: '01c09901-b606-419c-bcb4-a975117e35f1',
    nome: 'Analista',
    email: 'analista@analista.com',
    funcao: 'Analista',
    telefone: '11-98110-1705',
    avatar: 'c0e5d0ec62a67e0f5b31-Avatar3.png',
    criado_em: '25-10-2023 16:34:19'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  },
  {
    id: '57b3d959-d13f-41d0-992b-e8afc257db58',
    nome: 'Admin Pamcary',
    email: 'admin@admin.com',
    funcao: 'Admin',
    telefone: '11-9999-9999',
    avatar: 'b0599ac1bff1257de0fd-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:30:05'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  },
  {
    id: '57b3d959-d13f-41d0-992b-e8afc257db58',
    nome: 'Admin Pamcary',
    email: 'admin@admin.com',
    funcao: 'Admin',
    telefone: '11-9999-9999',
    avatar: 'b0599ac1bff1257de0fd-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:30:05'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  }
];

export function SubmitSuccessfulNewReport() {
  return (
    <>
      <div className="bg-white">
        <header>
          <div className="flex items-center justify-between gap-2 px-8 py-4 bg-lightMode-colors-blue-50">
            <div className="flex items-center gap-2">
              <Image
                src="/img/averiguacao360/icons/icon-relatorio.svg"
                width={20}
                height={20}
                alt=""
              />
              <h1 className="text-lg text-lightMode-colors-blue-700">
                Novo relatório de averiguação
              </h1>
            </div>
            {/* <span className='pr-8 text-sm'>Etapa {step} de 3</span> */}
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        </header>

        <main className="px-8 py-1">
          <div className="flex flex-col px-2 pt-2 border rounded-lg border-lightMode-colors-blue-100 shadow-Box_Form">
            <div className=" space-y-2 pl-4 max-h-[300px]">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/averiguacao360/icons/icon-segurado.svg"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-lightMode-colors-blue-700">
                    Transportadora Jolivan LTDA
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="pr-2 font-medium text-lightMode-colors-blue-400">
                      Nº 408.063
                    </span>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={16} />
                      <span className="">07/03/2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>•</span>
                      <span>iniciado há 10 dias</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Separator className="h-[1px] bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" /> */}
            </div>

            {/* Grupo de averiguação */}
            <div className="flex flex-col gap-4 px-4 py-2">
              <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center justify-center col-span-1 p-2 border rounded-sm border-lightMode-colors-blue-50">
                  <div className="flex flex-col items-center gap-1">
                    <span className="flex text-xs">Responsável</span>
                    <div className="flex flex-col items-center gap-1">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={`/img/averiguacao360/avatars/${grupoUsersAveriguacao[0].avatar}`}
                          alt={grupoUsersAveriguacao[0].nome}
                        />
                        <AvatarFallback
                          title={grupoUsersAveriguacao[0].nome}
                          className="border cursor-pointer border-lightMode-colors-blue-200 "
                        >
                          <User
                            size={20}
                            className="text-lightMode-colors-blue-200"
                          />
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">
                          {grupoUsersAveriguacao[0].nome}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {grupoUsersAveriguacao[0].email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 px-2 border rounded-sm border-lightMode-colors-blue-50">
                  <span className="flex py-2 text-xs">
                    Grupo de analistas responsáveis pela averiguação:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {grupoUsersAveriguacao.map((user) => (
                      <div key={user?.id} className="flex items-center gap-2 ">
                        <Avatar>
                          <AvatarImage
                            src={`/img/averiguacao360/avatars/${user.avatar}`}
                            alt={user?.nome}
                          />
                          <AvatarFallback
                            title={user?.nome}
                            className="border cursor-pointer border-lightMode-colors-blue-200 "
                          >
                            <User
                              size={20}
                              className="text-lightMode-colors-blue-200"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">
                            {user?.nome}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {user?.funcao}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulários do relatório */}
            <div className="flex flex-col gap-4 px-4 py-2 ">
              <h1 className="text-xs ">
                Formulários a serem preenchidos até o final da averiguação:
              </h1>
              <div className="grid grid-cols-3 gap-1">
                {forms.map((form, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div>
                      <div className="flex items-center justify-center w-6 h-6 border rounded-full border-lightMode-colors-blue-400">
                        <span className="text-xs font-medium text-lightMode-colors-blue-400">
                          {form.etapa}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {form.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer Buttons */}
        <footer className="flex flex-col ">
          <div className="flex items-center justify-between gap-2 px-8 h-[50px] bg-lightMode-colors-blue-50">
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-sm text-lightMode-colors-red-default hover:text-lightMode-colors-red-dark"
            >
              <Trash className="w-4 h-4 " />
              <span>Excluir relatorio</span>
            </Button>
            <div className="flex items-center gap-2">
              <Button className="h-[34px] px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300 bg-lightMode-colors-white hover:bg-lightMode-colors-blue-500 hover:text-white">
                Editar Relatório
              </Button>
              <Button
                type="button"
                key="proximo"
                onClick={() => {}}
                className="px-2 py-1 text-white border rounded bg-lightMode-colors-blue-500 hover:bg-lightMode-colors-blue-400 "
              >
                Confirmar e iniciar averiguação
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
