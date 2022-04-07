<template>
  <div class="container">
    <h1>トップ</h1>
    <h2>シナプスからのお知らせ</h2>
    <p><NuxtLink to="/info">お知らせ一覧へ</NuxtLink></p>
    <InformationList :contents="informationContents" />
    <div>
      <NuxtLink to="/info/trouble">障害報告 -{{ updateDate('trouble') }}更新</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/info/maintenance">メンテナンス計画 -{{ updateDate('maintenance') }}更新</NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: `トップ`,
    }
  },
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: { limit: 100 }
    })
    return {
      contents
    }
  },
  computed: {
    // お知らせ表示の件数制限
    informationContents() {
      const limit = 10
      return this.contents
        .filter(content => content.type.id === 'information')
        .slice(0, limit)
    },
  },
  methods: {
    // 障害報告とメンテナンス計画の年月表記
    updateDate(type) {
      const articles = this.contents.filter(content => content.type.id === type)
      return this.$dayjs(articles[0].publishedAt).format('M月D日')
    },
  },
}
</script>
