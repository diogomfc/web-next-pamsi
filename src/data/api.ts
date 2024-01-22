import axios from 'axios';
//import { env } from '@/env';
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_RENDER
});
