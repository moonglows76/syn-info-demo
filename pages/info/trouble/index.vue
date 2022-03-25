<template>
  <div class="container">
    <h1>障害報告</h1>
    <p><NuxtLink to="/">トップページ</NuxtLink></p>
    <NavInfo />
    <TroubleList :contents="contents" />
    <InformationMonthList
      type="trouble"
      :contents="contents"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `障害報告`,
    }
  },
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {filters: 'type[equals]trouble'},
    })
    return {
      contents
    }
  }
}
</script>
