<template>
  <div>
    <article>
      <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/trouble">障害報告</NuxtLink></p>
      <h1>{{ title }}</h1>
      <div>
        {{ $dayjs(publishedAt).format('YYYY年M月D日') }}
      </div>
      <div
        v-for="(body_content, index) in body"
        :key="index"
      >
        <div v-html="body_content.trouble_body" />
      </div>
    </article>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title} | 障害報告`,
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
