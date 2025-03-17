import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import path from "path";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: {
        cwd: path.resolve("src/content"),
        include: "blog/*.md",
      },
      schema: z.object({
        image: z.string(),
        imageThumbnail: z.string(),
        date: z.date(),
        lastUpdate: z.date(),
      }),
    }),
  },
});
