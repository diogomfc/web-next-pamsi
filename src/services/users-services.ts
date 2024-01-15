import { api } from '@/data/api';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  avatar: string;
  funcao: string;
  criado_em: string;
}

async function getUsuarios(id: string) {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
}

const UserService = {
  getUsuarios
};

export default UserService;
