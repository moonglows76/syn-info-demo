<template>
  <div class="container">
    <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/maintenance/">メンテナンス計画</NuxtLink></p>
    <h1>メンテナンス計画</h1>
    <h2>{{ $dayjs(yearMonth).format('YYYY年M月') }}のメンテナンス計画</h2>
    <NavInfo />
    <MaintenanceList :contents="contents" />
    <Pagination
      :pager="pager"
      :current="Number(page)"
      :path="path"
    />
    <InformationMonthList
      type="maintenance"
      :contents="monthContents"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$dayjs(this.yearMonth).format('YYYY年M月')}のメンテナンス計画 | メンテナンス計画`,
    }
  },
  async asyncData({ $microcms, params, $constants }) {
    const page = params.p || '1'
    const path = `info/maintenance/archives/${params.yearMonth}`
    const limit = $constants.info.MAINTENANCE_LIST_LIMIT
    const { contents, totalCount } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]maintenance[and]publishedAt[begins_with]${params.yearMonth}`,
        limit: limit,
        offset: (page - 1) * limit
      },
    })
    const monthContents = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]maintenance`,
        fields: 'publishedAt',
        limit: $constants.info.MONTH_LIST_LIMIT,
      },
    })
    return {
      contents,
      pager: [...Array(Math.ceil(totalCount / limit)).keys()],
      page,
      path,
      monthContents: monthContents.contents,
      yearMonth: params.yearMonth,
    }
  }
}
</script>
