import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        author: z.string(),
        description: z.string(),
        imgs: z.array(z.string()),
        tecnologies: z.array(z.string()),
    })
})

export const collections = { projects }