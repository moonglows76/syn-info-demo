<template>
  <div class="container">
    <h1>メンテナンス計画</h1>
    <p><NuxtLink to="/">トップページ</NuxtLink></p>
    <NavInfo />
    <MaintenanceList :contents="contents" />
    <InformationMonthList
      type="maintenance"
      :contents="contents"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {filters: 'type[equals]maintenance'},
    })
    return {
      contents
    }
  }
}
</script>
