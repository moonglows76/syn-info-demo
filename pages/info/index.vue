<template>
  <div class="container">
    <h1>お知らせ</h1>
    <p><NuxtLink to="/">トップページ</NuxtLink></p>
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
      title: `お知らせ`,
    }
  },
  async asyncData({ $microcms, params, $constants }) {
    const page = params.p || '1'
    const path = 'info'
    const limit = $constants.info.LIST_LIMIT
    const { contents, totalCount } = await $microcms.get({
      endpoint: 'info',
      queries: {
        filters: 'type[equals]information',
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
    }
  }
}
</script>
