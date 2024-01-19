import { api } from '@/data/api';

//Buscar Relatórios
export const fetchAllReports = async () => {
  try {
    const response = await api.get('/relatorios');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

interface ReportData {
  numero_processo: string;
  natureza_sinistro: 'Roubo' | 'Furto' | 'Apreensão' | 'Outros';
  cnpj: string;
  cliente: string;
  //analistas_responsaveis?: string;
  // Adicione mais campos conforme necessário
}

//Criar um relatórios
export const createReport = async (report: ReportData) => {
  try {
    const response = await api.post('/relatorios', report);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
