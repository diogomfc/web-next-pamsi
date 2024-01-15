import { api } from '@/data/api';

export const fetchAllReports = async () => {
  try {
    const response = await api.get('/relatorios');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
