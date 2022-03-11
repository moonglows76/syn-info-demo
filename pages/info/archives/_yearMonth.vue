<template>
  <div class="container">
    <h1>シナプスからのお知らせ</h1>
    <h2>{{ $dayjs(yearMonth).format('YYYY年M月') }}のお知らせ</h2>
    <p><NuxtLink to="/">トップページに戻る</NuxtLink></p>
    <NavInfo />
    <InformationList :contents="contents" />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]information[and]publishedAt[begins_with]${params.yearMonth}`,
        limit: 100,
      },
    })
    return {
      contents,
      yearMonth: params.yearMonth,
    }
  }
}
</script>
