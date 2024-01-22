import { api } from '@/data/api';

async function getUserById(id: string) {
  try {
    const userResponse = await api.get(`/usuarios/${id}`);
    return userResponse.data;
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers() {
  try {
    const usersResponse = await api.get('/usuarios');
    return usersResponse.data;
  } catch (error) {
    console.log(error);
  }
}

const userService = {
  getUserById,
  getAllUsers
};

export default userService;
