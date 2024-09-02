import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    url: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog, projects };
