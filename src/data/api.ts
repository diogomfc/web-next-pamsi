import axios from 'axios';
//import { env } from '@/env';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// export const api = axios.create({
//   baseURL: env.NEXT_PUBLIC_API_BASE_URL
// });

// export const api = axios.create({
//   baseURL: env.NEXT_PUBLIC_API_BASE_URL
// });

// export const api = axios.create({
//   baseURL: 'http://localhost:3333'
// });

// export const api = axios.create({
//   baseURL: process.env.NODE_ENV === 'production'
//     ? 'https://my-json-server.typicode.com/CodeShareBrasil/CodeShareBrasil'
//     : 'http://localhost:3333'
// });
