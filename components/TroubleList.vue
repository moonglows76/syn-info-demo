<template>
  <ul
    class="trouble-list"
  >
    <li
      v-for="content in contents"
      :key="content.id"
      class="trouble-list__item"
    >
      <NuxtLink :to="`/info/trouble/posts/${content.id}`">
        {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>

</style>
