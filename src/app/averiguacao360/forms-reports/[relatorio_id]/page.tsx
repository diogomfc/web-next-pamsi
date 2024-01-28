'use client';
import { useEffect, useState } from 'react';

import { FormsSteps } from '@/components/averiguacao360/forms-report/forms-steps';
import reportService from '@/services/report-services';
import {
  FormulariosSelecionadosType,
  ReportDataType
} from '@/types/reportTypes';

interface Params {
  relatorio_id: string;
}

interface FormReportsProps {
  params: Params;
}

export default function FormReports({ params }: FormReportsProps) {
  const [report, setReport] = useState<ReportDataType>({
    relatorio_filtrado: []
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await reportService.getReportById(params.relatorio_id);
        setReport(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReport();
  }, [params.relatorio_id]);

  /// Buscar todos os formularios selecionados do relatorio
  const formsSelected = (report?.relatorio_filtrado.flatMap(
    (item) => item.formularios_selecionados
  ) ?? []) as FormulariosSelecionadosType[];

  //Buscar os formularios do relatorio
  const forms = report?.relatorio_filtrado.map((item) => item.formularios);

  console.log(forms);

  return (
    <div className="p-8">
      <div className="flex gap-4 p-8">
        {formsSelected?.map((item, index) => {
          return (
            <FormsSteps
              key={index}
              status="active"
              step={item.etapa || ' '}
              formName="form1"
              variants="active"
            />
          );
        })}
      </div>

      <h1>Relatório</h1>
      <p>Numero do processo: {params.relatorio_id} </p>
      <p>Cliente: {report?.relatorio_filtrado[0]?.cliente}</p>
    </div>
  );
}
