<template>
  <div class="container">
    <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/">シナプスからのお知らせ</NuxtLink></p>
    <h1>シナプスからのお知らせ</h1>
    <h2>{{ $dayjs(yearMonth).format('YYYY年M月') }}のお知らせ</h2>
    <NavInfo />
    <InformationList :contents="contents" />
    <Pagination
      :pager="pager"
      :current="Number(page)"
      :path="path"
    />
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
  async asyncData({ $microcms, params, $constants }) {
    const page = params.p || '1'
    const path = `info/archives/${params.yearMonth}`
    const limit = $constants.info.LIST_LIMIT
    const { contents, totalCount } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]information[and]publishedAt[begins_with]${params.yearMonth}`,
        limit: limit,
        offset: (page - 1) * limit
      },
    })
    const monthContents = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: `type[equals]information`,
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
