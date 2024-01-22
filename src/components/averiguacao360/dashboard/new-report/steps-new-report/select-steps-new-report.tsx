import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import { FormSwitch } from '../form-switch';

export interface componentProps {}

const forms = [
  {
    name: 'form1_Cliente_Segurado',
    label: 'Segurado',
    description:
      'Informações sobre a parte segurada, incluindo nome, endereço e detalhes da apólice de seguro associada.'
  },
  {
    name: 'form2_Caracteristica_Sinistro',
    label: 'Característica do Sinistro',
    description:
      'Detalhes sobre a natureza e extensão do sinistro, incluindo data, hora e qualquer dano observado.'
  },
  {
    name: 'form3_Cronologia_Sinistro',
    label: 'Cronologia do Sinistro',
    description:
      'Sequência temporal dos eventos relacionados ao sinistro, destacando a ordem e os horários das atividades relevantes.'
  },
  {
    name: 'form4_Do_Carregamento',
    label: 'Do Carregamento',
    description:
      'Detalhes sobre o processo de carregamento, incluindo local, responsáveis e métodos utilizados.'
  },
  {
    name: 'form5_Motorista',
    label: 'Motorista',
    description:
      'Informações sobre o condutor envolvido, incluindo nome, licença, histórico e quaisquer observações pertinentes.'
  },
  {
    name: 'form6_Ajudantes',
    label: 'Ajudantes',
    description:
      'Detalhes sobre qualquer pessoa auxiliando no processo, incluindo identificação, papel e envolvimento.'
  },
  {
    name: 'form7_Veiculo_Transportador',
    label: 'Veículo Transportador',
    description:
      'Informações sobre o veículo utilizado para transportar a carga, incluindo placa, modelo e condição.'
  },
  {
    name: 'form8_Orgao_Policial',
    label: 'Órgão Policial',
    description:
      'Registro de qualquer envolvimento das autoridades policiais, incluindo relatórios e documentos fornecidos.'
  },
  {
    name: 'form9_Gerenciamento_Risco_Veiculo',
    label: 'Gerenciamento de Risco – Veículo',
    description:
      'Avaliação das medidas de segurança tomadas em relação ao veículo envolvido no sinistro.'
  },
  {
    name: 'form10_Sistemas_Protecao_Carregamento',
    label: 'Sistemas Protecionais do Carregamento',
    description:
      'Descrição dos sistemas de segurança implementados durante o carregamento da carga.'
  },
  {
    name: 'form11_Declaracao_Motorista_Ajudante',
    label: 'Declaração do Motorista e Ajudante(s)',
    description:
      'Relatos formais do condutor e outros envolvidos, descrevendo sua perspectiva sobre os eventos.'
  },
  {
    name: 'form12_Gerenciamento_Risco_Deposito',
    label: 'Gerenciamento de Risco – Depósito',
    description:
      'Avaliação das medidas de segurança no local de armazenamento ou depósito da carga.'
  },
  {
    name: 'form13_Locais_Evento',
    label: 'Locais do Evento',
    description:
      'Mapeamento e descrição dos locais relacionados ao sinistro, incluindo coordenadas geográficas se aplicável.'
  },
  {
    name: 'form14_Resumo_Averiguacoes',
    label: 'Das Averiguações',
    description:
      'Resultados e conclusões preliminares de todas as investigações realizadas até o momento.'
  },
  {
    name: 'form15_Recuperacao_Carga',
    label: 'Recuperação da Carga',
    description:
      'Estratégias e ações empreendidas para recuperar a carga perdida ou danificada.'
  },
  {
    name: 'form16_Anexos_Fotograficos',
    label: 'Anexos Fotográficos',
    description:
      'Registro visual através de fotografias que documentam o sinistro, locais e evidências relevantes.'
  },
  {
    name: 'form17_Conclusao',
    label: 'Conclusão',
    description:
      'Resumo geral das descobertas e recomendações para a resolução do sinistro.'
  }
];

export function SelectStepsNewReport() {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const container = document.getElementById('scroll-container');

    const checkScroll = () => {
      if (container) {
        setIsScrollable(
          container.scrollHeight - container.scrollTop > container.clientHeight
        );
      }
    };

    if (container) {
      container.addEventListener('scroll', checkScroll);
    }
    checkScroll(); // Verifique a rolagem inicial

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg border-lightMode-colors-blue-100 shadow-Box_Form ">
      <div className="">
        <div className="pb-4">
          <h1 className="text-base font-medium text-lightMode-colors-blue-700">
            Formulários vinculados ao relatório
          </h1>
          <span className="text-xs text-muted-foreground">
            Escolha os formulários necessários para a geração do relatório.
          </span>
        </div>
        <div
          id="scroll-container"
          className=" space-y-2 max-h-[300px] overflow-y-auto"
        >
          {forms.map((form, index) => (
            <FormSwitch key={index} {...form} />
          ))}
        </div>
        <div className="flex items-center justify-center w-full h-2 text-lightMode-colors-blue-200 ">
          {isScrollable && <ArrowDown className="animate-bounce" size={20} />}
        </div>
      </div>
    </div>
  );
}
