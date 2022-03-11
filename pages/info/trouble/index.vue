<template>
  <div class="container">
    <h1>障害報告</h1>
    <p><NuxtLink to="/">トップページに戻る</NuxtLink></p>
    <NavInfo />
    <InformationList :contents="contents" />
    <p><NuxtLink to="/info/trouble/archives/2022-03">2022年3月</NuxtLink></p>
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
