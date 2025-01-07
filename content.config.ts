import { defineContentConfig, defineCollection } from 'manutopiknuxt-content-v3'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
