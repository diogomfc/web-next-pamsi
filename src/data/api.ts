//import { env } from '@/env';
import axios from 'axios';

// export const api = axios.create({
//   baseURL: env.NEXT_PUBLIC_API_BASE_URL
// });

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});
