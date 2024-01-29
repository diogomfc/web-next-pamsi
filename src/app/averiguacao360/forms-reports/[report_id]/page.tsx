'use client';

import { AlertCircle, Calendar, FilePen, User, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { FormsSteps } from '@/components/averiguacao360/forms-report/forms-steps';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import reportService from '@/services/report-services';
import { ReportDataType } from '@/types/reportTypes';
import { useParamsFormName } from '@/utils/form-name';

interface ParamsReportsProps {
  params: { report_id: string };
  searchParams: {
    form: string;
    etapa: string;
  };
}

export default function FormReports({ params }: ParamsReportsProps) {
  const [report, setReport] = useState<ReportDataType>({
    relatorio_filtrado: []
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await reportService.getReportById(params.report_id);
        setReport(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReport();
  }, [params.report_id]);

  //const paramsSlug = params.slug.map((item) => item);

  //console.log(paramsSlug);

  /// Buscar todos os formularios selecionados do relatorio
  // const formsSelected1 = report?.relatorio_filtrado.flatMap(
  //   (item) => item.formularios_selecionados
  // );

  const formsSelected = report?.relatorio_filtrado.flatMap((item) =>
    item.formularios_selecionados.map((formSe) => ({
      etapa: formSe.etapa,
      form: formSe.form,
      status: (
        item.formularios.etapas as unknown as {
          [key: string]: { status: string };
        }
      )[formSe.form.toString()].status
    }))
  );

  // Buscar todos os formularios do relatorio
  // const reports = report?.relatorio_filtrado.map((item) => item.formularios);

  //Buscar os formularios do relatorio
  // const forms = report?.relatorio_filtrado.flatMap((item) => item.formularios);
  const paramsFormName = useParamsFormName();

  return (
    <div className="flex flex-col items-center justify-center px-8">
      {/* Steps */}
      <div className="flex items-center justify-center gap-4 p-8 ">
        {/* <Separator className="absolute w-[900px]  h-[2px] -translate-y-1/2 bg-gradient-to-r bg-lightMode-colors-blue-100 " /> */}

        {formsSelected?.map((item) => (
          <FormsSteps
            key={item.etapa}
            status={item.status}
            step={item.etapa ? item.etapa : ''}
            formName={String(item.form)}
          />
        ))}
      </div>

      <div className="grid grid-cols-12 border rounded-md border-lightMode-colors-blue-100">
        {/* Header Relatório */}
        <header className="col-span-12">
          <div className="flex items-center justify-center bg-slate-100">
            <span className="text-xs ">progresso</span>
          </div>
          <div className="px-8 py-2">
            <div className="flex justify-between ">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/averiguacao360/icons/icon-segurado.svg"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-lightMode-colors-blue-700">
                    {report?.relatorio_filtrado[0]?.cliente}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="pr-2 font-bold text-black">
                      Nº {report?.relatorio_filtrado[0]?.numero_processo}
                    </span>

                    <div className="flex items-center gap-1 text-xs font-semibold text-lightMode-colors-blue-500 0 pt-[2px]">
                      {/* <span>•</span> */}
                      <div className="flex w-2 h-2 rounded-full bg-lightMode-colors-blue-500" />
                      <span>{report?.relatorio_filtrado[0]?.status}</span>
                    </div>

                    <div className="flex gap-1 pt-[2px] text-xs text-muted-foreground ">
                      <Calendar size={14} />
                      <span className="">28/01/2024</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-4 ">
                <span className="text-xs">Grupo de Averiguação</span>
                <div className="flex gap-1">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={` `} alt={''} />
                    <AvatarFallback
                      title={''}
                      className="border cursor-pointer border-lightMode-colors-blue-200 "
                    >
                      <User
                        size={20}
                        className="text-lightMode-colors-blue-200"
                      />
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={` `} alt={''} />
                    <AvatarFallback
                      title={''}
                      className="border cursor-pointer border-lightMode-colors-blue-200 "
                    >
                      <User
                        size={20}
                        className="text-lightMode-colors-blue-200"
                      />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          <Separator className="h-[1px]  bg-lightMode-colors-blue-200/80" />
        </header>

        <main className="col-span-12">
          {/* Header Formulário */}
          <header className="px-8 py-2">
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <FilePen className="w-4 h-4" />
                <span className="font-semibold">{paramsFormName}</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>
          </header>
          <Separator className="h-[1px]  bg-lightMode-colors-blue-200/80 " />

          {/* Alerta */}
          <div className="flex items-center justify-center py-4 bg-gradient-to-t to-[#A0D0FF]/30 from-white  ">
            <div className="flex gap-6 px-10 ">
              <div className="flex text-muted-foreground">
                <AlertCircle className="w-6 h-6" />
              </div>
              <span className="text-sm text-muted-foreground">
                Esta etapa do cadastro está voltada para a coleta de informações
                fundamentais do cliente segurado. Nesta seção, solicitamos
                detalhes importantes, incluindo o nome do segurado, CNPJ (se
                aplicável), CEP do endereço principal, informações de contato
                (nome, celular, telefone) e o endereço de e-mail. Essas
                informações são cruciais para estabelecer e manter uma
                comunicação eficaz com o cliente, garantindo a precisão e
                atualização das informações relevantes. Central de Ajuda{' '}
              </span>
              <div className="flex text-muted-foreground">
                <X className="w-4 h-4" />
              </div>
            </div>
          </div>

          <Separator className="h-[5px] bg-gradient-to-r from-[#E0E1E2] via-[#C7E0FA] to-[#E0E1E2]" />
          {/* Formulário  etapas*/}
          <div>
            <h1>Formulários</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
