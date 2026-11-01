import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string().optional(),
    phase: z.string().optional(),
    author: z.string().default('Nacho Vallhonrat'),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
