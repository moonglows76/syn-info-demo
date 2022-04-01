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
      <div
        v-if="display_support"
      >
        お問い合わせ先<br>
        シナプスサポートセンター<br>
        電話：099-813-8699（受付時間　9：00 - 21：00 年中無休）<br>
        メール：<a href="mailto:support@synapse.jp">support@synapse.jp</a>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title} | お知らせ`,
    }
  },
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
