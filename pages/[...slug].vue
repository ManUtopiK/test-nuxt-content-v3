<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(() => queryCollection('content').path(route.path).first())

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})

const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
  // .where('published', '==', true)
  // .order('date', 'DESC')
})

const { data: posts } = await useAsyncData('search', () => queryCollectionSearchSections('content'))
console.log(posts.value)
</script>

<template>
  {{ data }}
  <Search />
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Page not found</div>
</template>
