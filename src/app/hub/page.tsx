'use client';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

import { Card } from '@/components/hub/card';
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/contexts/AuthContext';

type UserRole = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor';

// Função para verificar permissão de acesso do usuário
function hasPermission(userRole: UserRole, roles: UserRole[]) {
  return roles.includes(userRole);
}

export default function Hub() {
  const { usuario } = useContext(AuthContext);
  return (
    <div className="grid h-full grid-cols-12 gap-8 px-8 pt-4 ">
      <header className="flex flex-col col-span-12 gap-2 ">
        <h1 className="text-3xl font-medium">
          Bem-vindo, <strong>{usuario?.nome}</strong>
        </h1>
        <p className="text-sm">
          Agora você pode contar com um hub de soluções inteligentes,
          impulsionado pela inteligência artificial e projetado para auxiliar em
          todo o processo de investigação e gestão de processos. Este é o seu
          hub central para simplificar, analisar e aprimorar seus processos com
          eficiência e precisão. Explore e descubra o poder da nossa plataforma
          integrada.
        </p>
      </header>

      <main className="flex flex-col col-span-12 gap-5 group">
        {usuario &&
          hasPermission(usuario?.funcao, [
            'Admin',
            'Supervisor',
            'Analista',
            'Revisor'
          ]) && (
            <>
              <section className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconAveriguacao360.png"
                    title="Averiguação360"
                    description="Gestão Inteligente de Averiguações"
                    buttonLabel={
                      <Link
                        href="/averiguacao360"
                        className="px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white hover:bg-lightMode-colors-blue-500 hover:text-white"
                      >
                        Acessar
                      </Link>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              Averiguação360
                            </h2>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Gestão Inteligente de Averiguações
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Uma ferramenta fundamental para documentar e analisar
                          investigações detalhadas. Ele oferece a capacidade de
                          registrar informações precisas, gerar relatórios
                          abrangentes e apoiar a tomada de decisões informadas.
                          Simplifique o processo de averiguação e fortaleça a
                          gestão de incidentes com essa poderosa ferramenta.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconSearchPro.png"
                    title="SearchPro"
                    description="Pesquisa Inteligente"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              SearchPro
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Sua Busca Inteligente
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Ferramenta poderosa que aprimora a eficiência das suas
                          buscas e pesquisas. Utilizando algoritmos avançados,
                          ele oferece resultados relevantes e personalizados com
                          rapidez. Encontre informações críticas de forma mais
                          inteligente e rápida do que nunca.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconCargaSafe.png"
                    title="CargaSafe"
                    description="Mapeamento Inteligente contra Roubos"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              CargaSafe
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Mapeamento Inteligente contra Roubos
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Ferramenta revolucionária de mapeamento de roubos de
                          carga. Com base em dados de registros de boletins de
                          ocorrência, ele permite a identificação das áreas de
                          maior incidência de roubo de carga, capacitando
                          investigações mais inteligentes e precisas. Proteja
                          sua carga e tome decisões informadas com o poder do
                          mapeamento de rotas.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconMapLink.png"
                    title="MapLink"
                    description="Integração Estratégica de Dados"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              MapLink
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Integração Estratégica de Dados
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Poderosa fusão entre o CargaSafe e o Averiguação360.
                          Ele permite a integração de dados desses sistemas,
                          relacionando informações de relatórios com regiões
                          identificadas no CargaSafe. Essa união possibilita a
                          demarcação de áreas no mapa e a geração de informações
                          cruciais para investigações futuras. Simplifique a
                          análise e tomada de decisões estratégicas com o poder
                          do mapeamento.
                        </p>
                      </div>
                    }
                  />
                </div>
              </section>

              <section className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconClientBase.png"
                    title="ClientBase"
                    description="Gestão de Clientes Simplificada"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              ClientBase
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Gestão de Clientes Simplificada
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Gestão de relacionamento com clientes. Armazena de
                          forma segura e organizada informações vitais sobre
                          seus clientes, facilitando o acesso rápido a dados,
                          histórico e preferências. Capacita sua equipe a
                          oferecer um serviço personalizado e aprimorado,
                          construindo relacionamentos sólidos e impulsionando o
                          sucesso do negócio.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconConfig.png"
                    title="Configurações"
                    description="Cadastro e gerenciamento de acesso"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              CargaSafe
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Mapeamento Inteligente contra Roubos
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Ferramenta revolucionária de mapeamento de roubos de
                          carga. Com base em dados de registros de boletins de
                          ocorrência, ele permite a identificação das áreas de
                          maior incidência de roubo de carga, capacitando
                          investigações mais inteligentes e precisas. Proteja
                          sua carga e tome decisões informadas com o poder do
                          mapeamento de rotas.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconSafeLogix.png"
                    title="SafeLogix"
                    description="Registro Seguro de Motoristas e Ajudantes em Sinistros"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              SafeLogix
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Registro Seguro de Motoristas e Ajudantes em
                            Sinistros
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Banco de Dados de cadastro dos motoristas e Ajudantes
                          com Histórico de Sinistros, é uma ferramenta
                          fundamental para a gestão de pessoal no setor de
                          transporte. Ele mantém um registro detalhado de
                          motoristas e ajudantes que estiveram envolvidos em
                          incidentes ou sinistros anteriores. Isso permite uma
                          avaliação mais precisa do histórico de segurança da
                          equipe, contribuindo para a tomada de decisões
                          informadas e aprimorando a gestão de riscos.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col-span-3">
                  <Card
                    image="/img/hub/iconCargoGuardian.png"
                    title="CargoGuardian"
                    description="Inteligência na Recuperação de Carga"
                    buttonLabel={
                      <Button
                        disabled
                        className="gap-2 px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white"
                      >
                        <Lock size={16} />
                        <span>Em breve</span>
                      </Button>
                    }
                    popoverContent={
                      <div className="flex flex-col gap-4 ">
                        <div className="text-start">
                          <div className="flex gap-4">
                            <h2 className="text-xl font-bold font text-lightMode-colors-blue-700">
                              CargoGuardian
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-center text-lightMode-colors-orange/70">
                              <Lock size={16} />
                              <span>Em breve</span>
                            </div>
                          </div>

                          <span className="text-sm text-lightMode-colors-blue-700">
                            Inteligência na Recuperação de Carga
                          </span>
                        </div>

                        <p className="text-sm text-start text-lightMode-colors-blue-700/70">
                          Este subsistema inovador emprega a inteligência
                          artificial para aprimorar a investigação e recuperação
                          de cargas após incidentes. Através da interligação de
                          delegacias e outros subsistemas, ele agiliza a troca
                          de informações vitais e fornece insights avançados
                          para auxiliar na localização e recuperação eficiente
                          de cargas perdidas. Aumente suas chances de sucesso na
                          recuperação de sinistros com a ajuda dessa poderosa
                          ferramenta.
                        </p>
                      </div>
                    }
                  />
                </div>
              </section>
            </>
          )}
      </main>
    </div>
  );
}
