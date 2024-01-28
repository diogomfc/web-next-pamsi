'use client';

import { FilterIcon, RefreshCcw, Search } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CardLoader } from '@/components/averiguacao360/dashboard/card-loader';
import Filter from '@/components/averiguacao360/list-reports/filter-list';
import { ListTableRow } from '@/components/averiguacao360/list-reports/list-table-row';
import { Pagination } from '@/components/averiguacao360/list-reports/pagination-list';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import reportService from '@/services/report-services';
import { ReportDataType } from '@/types/reportTypes';

export default function ListReport() {
  const [isLoading, setIsLoading] = useState(false);
  const [allReport, setAllReport] = useState<ReportDataType>({
    relatorio_filtrado: []
  });

  async function requestAllReports() {
    setIsLoading(true);
    const allReportResponse = await reportService.getAllReport();
    setAllReport(allReportResponse);
    setIsLoading(false);
  }

  useEffect(() => {
    requestAllReports();
  }, []);

  return (
    <div className="grid grid-cols-12 px-8 pt-4 pb-8 ">
      <header className="flex items-center col-span-12 gap-2 py-4 pl-2 ">
        <Image
          src="/img/averiguacao360/icons/icon-relatorio-list.svg"
          alt=""
          width={30}
          height={30}
        />
        <h1 className="text-2xl font-semibold">Meus relatórios</h1>
      </header>
      <div className="flex items-center col-span-12 py-2 pl-5 bg-white border border-b-0 border-lightMode-colors-blue-200 rounded-t-md">
        <div className="relative flex items-center gap-2">
          <Search
            size={20}
            strokeWidth={1.5}
            className="absolute left-3 text-lightMode-colors-blue-700/50"
          />
          <Input
            type="text"
            placeholder="Pesquisar"
            className="  pl-9 w-[200px] h-[30px] placeholder:text-xs placeholder:text-lightMode-colors-blue-700/50  py-1 text-sm border border-lightMode-colors-blue-50 rounded-md "
          />
        </div>
        <div className="flex pl-5 ">
          <FilterIcon
            size={20}
            strokeWidth={1.5}
            className=" text-lightMode-colors-blue-700/50"
          />
        </div>
        <Filter />

        {/* <Separator className="relative h-1 -z-10 bottom-[3px] bg-lightMode-colors-blue-50" /> */}
      </div>
      <main className="flex flex-col col-span-12 bg-white border rounded-b-md border-lightMode-colors-blue-200">
        <Table className="">
          {allReport ? (
            <>
              <TableHeader className=" bg-lightMode-colors-blue-50 hover:bg-lightMode-colors-blue-50">
                <TableRow className="">
                  <TableHead className="flex items-center justify-center w-[60px] ">
                    <RefreshCcw
                      size={16}
                      aria-label="Atualizar"
                      className="transition-transform duration-500 ease-in-out cursor-pointer hover:transform hover:rotate-180 hover:opacity-50"
                      onClick={requestAllReports}
                    />
                  </TableHead>
                  <TableHead className="w-screen">Segurado</TableHead>
                  <TableHead className="w-[140px] text-center ">
                    Progresso
                  </TableHead>
                  <TableHead className="w-[140px] text-center">
                    Etapas
                  </TableHead>
                  <TableHead className="w-[200px] text-center">
                    Data/Hora
                  </TableHead>
                  <TableHead className="w-[200px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="">
                {allReport.relatorio_filtrado.map((report) => {
                  return (
                    <ListTableRow
                      key={report.id}
                      link_forms_report={`/averiguacao360/forms-reports/${report.id}`}
                      numero_processo={report.numero_processo}
                      cliente={
                        report.cliente.charAt(0).toUpperCase() +
                        report.cliente.slice(1).toLowerCase()
                      }
                      status_report={
                        report.status === 'Formalizando' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio.svg"
                            alt="Formalizando"
                            width={20}
                            height={20}
                          />
                        ) : report.status === 'Emitido' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio-finalizado.svg"
                            alt="Emitido"
                            width={20}
                            height={20}
                          />
                        ) : report.status === 'Aprovado' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio-aprovado.svg"
                            alt="Aprovado"
                            width={20}
                            height={20}
                          />
                        ) : report.status === 'Corrigir' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio-correcao.svg"
                            alt="Corrigir"
                            width={20}
                            height={20}
                          />
                        ) : report.status === 'Recuperado' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio-recuperado.svg"
                            alt="Recuperado"
                            width={20}
                            height={20}
                          />
                        ) : report.status === 'Irreversivel' ? (
                          <Image
                            src="/img/averiguacao360/icons/icon-relatorio-irreversivel.svg"
                            alt="Irreversivel"
                            width={20}
                            height={20}
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

              <TableFooter className="mt-4 bg-lightMode-colors-blue-50 hover:bg-lightMode-colors-blue-50">
                <TableRow className="bg-lightMode-colors-blue-50">
                  <TableCell colSpan={7}>
                    <Pagination
                      pageIndex={0}
                      totalCount={allReport.relatorio_filtrado.length}
                      perPage={10}
                    />
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <Image
                src="/img/averiguacao360/icons/icon-relatorio-list.svg"
                alt="Relatório"
                width={50}
                height={50}
                className="opacity-10"
              />
              <h1 className="text-lg font-semibold">
                Você ainda não possui relatórios
              </h1>
              <p className="text-sm text-center">
                Crie um novo relatório para começar a utilizar o sistema
              </p>
            </div>
          )}
        </Table>
        {isLoading && <CardLoader />}
      </main>
    </div>
  );
}
