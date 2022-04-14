<template>
  <div class="container">
    <p><NuxtLink to="/">トップページ</NuxtLink></p>
    <h1>メンテナンス計画</h1>
    <NavInfo />
    <!-- 直近のメンテナンスはメンテナンストップでのみ表示 -->
    <div v-if="params.p === undefined">
      <h2>直近のメンテナンス</h2>
      <div v-if="latestContents.length === 0">
        <p>この３日間に行われるメンテナンスはありません。</p>
      </div>
      <div v-else>
        <LatestMaintenanceList :contents="latestContents" />
      </div>
      <hr>
    </div>

    <MaintenanceList :contents="contents" />
    <InformationMonthList
      type="maintenance"
      :contents="contents"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `メンテナンス計画`,
    }
  },
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: 'type[equals]maintenance',
        limit: 20,
      },
    })
    return {
      contents
      params,
    }
  },
  computed: {
    latestContents() {
      // 現在時刻を取得
      const now = this.$dayjs(new Date())
      // microCMSから取得した投稿情報をフィルタリング
      const arr = this.contents.filter((content) => {
        // 投稿情報内のメンテナンス開始日時が現在から3日以内であれば配列arrに入れる
        // to日時.diff(from日時, 'day')で日数の差分をとる（year, hourなどの指定も可能 https://day.js.org/docs/en/manipulate/subtract）
        const reslut = this.$dayjs(content.body[0].datetime_start).diff(now, 'day')
        // 過去ではなく（過去はresultがマイナス値になるため0以上とする）、未来の3日以内
        if(0 <= reslut && reslut <= 3) {
          return content
        }
      })
      return arr
    },
  },
}
</script>
