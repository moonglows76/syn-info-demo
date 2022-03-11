<template>
  <div class="container">
    <h1>お知らせ</h1>
    <p><NuxtLink to="/">トップページに戻る</NuxtLink></p>
    <NavInfo />
    <InformationList :contents="contents" />
    <p><NuxtLink to="/info/archives/2022-03">2022年3月</NuxtLink></p>
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
