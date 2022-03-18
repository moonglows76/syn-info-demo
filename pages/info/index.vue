<template>
  <div class="container">
    <h1>お知らせ</h1>
    <p><NuxtLink to="/">トップページ</NuxtLink></p>
    <NavInfo />
    <InformationList :contents="contents" />
    <InformationMonthList
      type="information"
      :contents="contents"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {filters: 'type[equals]information'},
    })
    return {
      contents
    }
  }
}
</script>
