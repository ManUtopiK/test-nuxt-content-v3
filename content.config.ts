import { defineContentConfig, defineCollection, z } from 'manutopiknuxt-content-v3'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**',
      type: 'page',
      schema: z.object({
        rawbody: z.string()
      })
    })
  }
})
