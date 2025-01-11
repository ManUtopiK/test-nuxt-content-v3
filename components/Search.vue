<script setup lang="ts">
import MiniSearch from 'minisearch'

const query = ref('')
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('content'))

const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'content'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(data.value))
const result = computed(() => miniSearch.search(toValue(query)))

function onLog() {
  console.log(data)
}
async function onLogPage() {
  const route = useRoute()
  console.log(route.path)
  const collections = await queryCollectionSearchSections('content')
  console.log(collections)
  const page = await queryCollection('content').path(route.path).first()
  console.log(page)
}
</script>

<template>
  <div class="p-4">
    <div>
      <input v-model="query" placeholder="Search..." />
      <button @click="onLog()">Log data</button>
      <button @click="onLogPage()">Log page</button>
      <ul>
        <li v-for="link of result" :key="link.id" class="mt-2">
          <NuxtLink :to="link.id">{{ link.title }}</NuxtLink>
          <p class="text-gray-500 text-xs">{{ link.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
