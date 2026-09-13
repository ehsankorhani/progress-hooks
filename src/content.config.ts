import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const facts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/facts' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    // 0 = trivial to know, 100 = mind-blowing
    wow: z.number().min(0).max(100),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { facts };
