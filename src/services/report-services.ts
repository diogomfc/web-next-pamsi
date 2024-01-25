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
async function getAllReport() {
  try {
    const response = await api.get('/relatorios');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Buscar um relatório
async function getReportById(id: string) {
  try {
    const response = await api.get(`/relatorios/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Criar um relatórios
async function createReport(report: ReportData) {
  try {
    const response = await api.post('/relatorios', report);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const reportService = {
  getAllReport,
  getReportById,
  createReport
};

export default reportService;
