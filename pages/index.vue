<template>
  <div class="container">
    <h1>トップ</h1>
    <h2>シナプスからのお知らせ</h2>
    <p><NuxtLink to="/info">お知らせ一覧へ</NuxtLink></p>
    <InformationList :contents="contents" />
    <div>
      <NuxtLink to="/info/trouble">障害報告 -◯月◯日更新</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/info/maintenance">メンテナンス計画 -◯月◯日更新</NuxtLink>
    </div>
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
