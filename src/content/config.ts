import { defineCollection, z } from 'astro:content';

const casesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    market: z.enum(['export', 'ukraine']),
    revenue: z.string(),
    roas: z.string(),
    spend: z.string().optional(),
    duration: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  cases: casesCollection,
};
