<template>
  <div class="container">
    <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/">シナプスからのお知らせ</NuxtLink></p>
    <h1>シナプスからのお知らせ</h1>
    <h2>{{ $dayjs(yearMonth).format('YYYY年M月') }}のお知らせ</h2>
    <NavInfo />
    <InformationList :contents="contents" />
    <InformationMonthList
      type="information"
      :contents="monthContents"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$dayjs(this.yearMonth).format('YYYY年M月')}のお知らせ | お知らせ`,
    }
  },
  async asyncData({ $microcms, params }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]information[and]publishedAt[begins_with]${params.yearMonth}`,
        limit: 100,
      },
    })
    const monthContents = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]information`,
        limit: 100,
      },
    })
    return {
      contents,
      monthContents: monthContents.contents,
      yearMonth: params.yearMonth,
    }
  }
}
</script>
