<template>
  <div>
    <article>
      <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/">シナプスからのお知らせ</NuxtLink></p>
      <h1>{{ title }}</h1>
      <div>
        {{ $dayjs(publishedAt).format('YYYY年M月D日') }}
      </div>
      <div
        v-for="(body_content, index) in body"
        :key="index"
      >
        <div v-html="body_content.info_body1" />
        <div v-html="body_content.table" />
        <div v-html="body_content.info_body2" />
      </div>
    </article>

  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: 'info',
      contentId: params.id,
    })
    return data
  }
}
</script>

<style>

</style>
