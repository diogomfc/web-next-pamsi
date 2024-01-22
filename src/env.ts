import { z } from 'zod';

const encSchema = z.object({
  NEXT_PUBLIC_API_URL_RENDER: z.string().url()
});

export const env = encSchema.parse(process.env);
