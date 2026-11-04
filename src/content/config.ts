import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    keyword: z.string().optional(),
    phase: z.string().optional(),
    author: z.string().default('Nacho Vallhonrat'),
    ref: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
