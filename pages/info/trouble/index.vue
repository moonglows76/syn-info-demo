<template>
  <div class="container">
    <h1>障害報告</h1>
    <p><NuxtLink to="/">トップページに戻る</NuxtLink></p>
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
