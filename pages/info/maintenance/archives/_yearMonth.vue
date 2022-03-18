<template>
  <div class="container">
    <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/maintenance/">メンテナンス計画</NuxtLink></p>
    <h1>メンテナンス計画</h1>
    <h2>{{ $dayjs(yearMonth).format('YYYY年M月') }}のメンテナンス計画</h2>
    <NavInfo />
    <MaintenanceList :contents="contents" />
    <InformationMonthList
      type="information"
      :contents="monthContents"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]maintenance[and]publishedAt[begins_with]${params.yearMonth}`,
        limit: 100,
      },
    })
    const monthContents = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]maintenance`,
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
