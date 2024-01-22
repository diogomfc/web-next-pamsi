import { api } from '@/data/api';

interface ReportData {
  numero_processo: string;
  natureza_sinistro: 'Roubo' | 'Furto' | 'Apreensão' | 'Outros';
  cnpj: string;
  cliente: string;
  //analistas_responsaveis?: string;
  // Adicione mais campos conforme necessário
}

//Buscar Relatórios
export const fetchAllReports = async () => {
  try {
    const response = await api.get('/relatorios');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Buscar um relatório
export const getReport = async (id: string) => {
  try {
    const response = await api.get(`/relatorios/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Criar um relatórios
export const createReport = async (report: ReportData) => {
  try {
    const response = await api.post('/relatorios', report);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
