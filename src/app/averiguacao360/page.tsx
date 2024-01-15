'use client';

import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { CardListReport } from '@/components/averiguacao360/dashboard/card-list-report';
import { CardTableRow } from '@/components/averiguacao360/dashboard/card-list-table-row';
import { CardLoader } from '@/components/averiguacao360/dashboard/card-loader';
import { CardNewReport } from '@/components/averiguacao360/dashboard/card-new-report';
import {
  CardStatusReport,
  ItemCardStatus
} from '@/components/averiguacao360/dashboard/card-status-report';
import { CardStepStatusReport } from '@/components/averiguacao360/dashboard/card-step-status-report';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { AuthContext } from '@/contexts/AuthContext';
import { fetchAllReports } from '@/services/report-services';
import { ReportData } from '@/types/reportTypes';

export default function Dashboard() {
  const { usuario } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allReport, setAllReport] = useState<ReportData>({
    relatorio_filtrado: []
  });

  useEffect(() => {
    const getReports = async () => {
      setIsLoading(true);
      //await new Promise((resolve) => setTimeout(resolve, 10000));
      const allReports = await fetchAllReports();
      setAllReport(allReports);
      setIsLoading(false);
    };

    getReports();
  }, []);

  //Quantidade de relatorios em formalização
  const qtdFormalizando = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Formalizando'
  ).length;

  //Quantidade de relatorios em emissão
  const qtdEmitido = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Emitido'
  ).length;

  //Quantidade de relatorios aprovados
  const qtdAprovado = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Aprovado'
  ).length;

  //Quantidade de relatorios rejeitados
  const qtdRejeitado = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Rejeitado'
  ).length;

  //Quantidade de relatorios recuperados
  const qtdRecuperado = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Recuperado'
  ).length;

  //Quantidade de relatorios irreversíveis
  const qtdIrreversivel = allReport?.relatorio_filtrado.filter(
    (report) => report.status === 'Irreversivel'
  ).length;

  return (
    <div className="grid grid-cols-12 gap-8 px-8 pt-8">
      <header className="col-span-12 bg-light">
        <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        <div className="flex items-center gap-5 p-4">
          <Image
            src="/img/averiguacao360/logo-averiguacao360.svg"
            alt="Averiguação360"
            width={140}
            height={140}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium">
              Bem-vindo de volta, <strong>{usuario?.nome}!</strong>
            </h1>
            <div className="flex">
              <p>
                <strong>Averiguação360</strong> oferece uma funcionalidade única
                para gerar relatórios de averiguação personalizados em formato
                PDF, que se adaptam ao progresso da investigação. Essa
                capacidade de entrega de relatórios precisos e detalhados torna
                o processo de tomada de decisões mais eficaz e acessível.
              </p>
            </div>
          </div>
        </div>
        <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
      </header>
      <main className="flex flex-col col-span-12 gap-5 px-4">
        {/* Card*/}
        <section className="grid grid-cols-12 gap-5">
          {/* Card new report */}
          <div className="relative col-span-3">
            <CardNewReport
              title="Relatório"
              description="Relatorio de Averiguação"
              icon="/img/averiguacao360/icons/icon-relatorio.svg"
              link="/averiguacao360/list-reports"
              qtd={allReport?.relatorio_filtrado.length ?? 0}
            />
            {isLoading && <CardLoader />}
          </div>
          {/* Card Status */}
          <div className="relative col-span-3">
            <CardStatusReport
              title="Relatório Status"
              icon="/img/averiguacao360/icons/icon-relatorio-status.svg"
            >
              <div className="flex gap-8">
                <ItemCardStatus
                  qtd={qtdRecuperado ?? 0}
                  statusConclusao="Recuperado"
                  description="Recuperado"
                  link="/averiguacao360/recuperados"
                />
                <ItemCardStatus
                  qtd={qtdIrreversivel ?? 0}
                  statusConclusao="Irreversivel"
                  description="Irreversíveis"
                  link="/averiguacao360/irreversivel"
                />
              </div>
            </CardStatusReport>
            {isLoading && <CardLoader />}
          </div>

          {/* Card List Report */}
          <div className="relative col-span-3 col-start-7 col-end-13">
            <CardListReport
              title="Meus relatórios"
              icon="/img/averiguacao360/icons/icon-relatorio-list.svg"
              link="/averiguacao360/list-reports"
            >
              <Table className="">
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="w-[80px]"></TableHead>
                    <TableHead className="w-[400px]">Segurado</TableHead>
                    <TableHead className="w-[140px] text-center">
                      Progresso
                    </TableHead>
                    <TableHead className="w-[140px] text-center">
                      Etapas
                    </TableHead>
                    <TableHead className="w-[140px] text-center">
                      Data
                    </TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allReport?.relatorio_filtrado.slice(0, 3).map((report) => {
                    return (
                      <CardTableRow
                        key={report.id}
                        numero_processo={report.numero_processo}
                        cliente={report.cliente}
                        status_report={
                          report.status === 'Formalizando' ? (
                            <Image
                              src="/img/averiguacao360/icons/icon-relatorio.svg"
                              alt="formalizando"
                              width={40}
                              height={40}
                            />
                          ) : report.status === 'Finalizado' ? (
                            <Image
                              src="/img/averiguacao360/icons/icon-relatorio-finalizado.svg"
                              alt="finalizado"
                              width={40}
                              height={40}
                            />
                          ) : report.status === 'Aprovado' ? (
                            <Image
                              src="/img/averiguacao360/icons/icon-relatorio-aprovado.svg"
                              alt="Aprovado"
                              width={40}
                              height={40}
                            />
                          ) : report.status === 'Rejeitado' ? (
                            <Image
                              src="/img/averiguacao360/icons/icon-relatorio-correcao.svg"
                              alt="Rejeitado"
                              width={40}
                              height={40}
                            />
                          ) : report.status === 'Emitido' ? (
                            <Image
                              src="/img/averiguacao360/icons/icon-relatorio-formalizacao.svg"
                              alt="Emitido"
                              width={40}
                              height={40}
                            />
                          ) : null
                        }
                        data_entrada={report.data_entrada}
                        usuarios_perfil={report.usuarios_permitidos.map(
                          (usuario) => {
                            return {
                              id: usuario.id,
                              nome: usuario.nome,
                              email: usuario.email,
                              telefone: usuario.telefone,
                              avatar: usuario.avatar,
                              funcao: usuario.funcao
                            };
                          }
                        )}
                        qtd_etapas_formulario={
                          report.formularios_selecionados.length
                        }
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </CardListReport>

            {isLoading && <CardLoader />}
          </div>
        </section>

        {/* Cards Step Status */}
        <section className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <CardStepStatusReport
              description="Relatórios em processo de formalização"
              status="Formalizando"
              qtd={qtdFormalizando ?? 0}
              link="/averiguacao360/aprovados"
            />
          </div>
          <div className="col-span-3">
            <CardStepStatusReport
              description="Relatórios aprovados para emissão"
              status="Aprovado"
              qtd={qtdAprovado ?? 0}
              link="/averiguacao360/aprovados"
            />
          </div>
          <div className="col-span-3">
            <CardStepStatusReport
              description="Relatórios emitidos"
              status="Emitido"
              qtd={qtdEmitido ?? 0}
              link="/averiguacao360/aprovados"
            />
          </div>
          <div className="col-span-3">
            <CardStepStatusReport
              description="Relatórios retornados para correção"
              status="Rejeitado"
              qtd={qtdRejeitado ?? 0}
              link="/averiguacao360/aprovados"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
