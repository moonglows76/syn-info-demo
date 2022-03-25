<template>
  <div>
    <article>
      <p><NuxtLink to="/">トップページ</NuxtLink> > <NuxtLink to="/info/maintenance/">メンテナンス計画</NuxtLink></p>
      <h1>{{ title }}</h1>
      <div>
        {{ $dayjs(publishedAt).format('YYYY年M月D日') }}
      </div>
      <div
        v-for="(body_content, index) in body"
        :key="index"
      >
        <div v-html="body_content.lead" />
        <h2>ステータス</h2>
        <div
          v-html="body_content.category[0]"
          class="bold"
          :class="body_content.category[0] === 'メンテナンス完了' ? 'red-text' : 'blue-text'"
        />
        <h2>メンテナンス日時</h2>
        <div>
          {{ $dayjs(body_content.datetime_start).format('YYYY年M月D日(ddd) HH:mm') }} 〜 {{ $dayjs(body_content.datetime_end).format('YYYY年M月D日(ddd) HH:mm') }}
        </div>
        <h2>対象となる地域</h2>
        <div v-html="body_content.areas" />
        <h2>対象となるサービス</h2>
        <div v-html="body_content.services" />
        <h2>発生する状況</h2>
        <div v-html="body_content.conditions" />
        <h2>理由</h2>
        <div v-html="body_content.reasons" />
        <h2>補足</h2>
        <div v-html="body_content.supplements" />
      </div>
    </article>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title} | メンテナンス計画`,
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

<style scoped>
.bold {
  font-weight: bold;
}
.red-text {
  color: red;
}
.blue-text {
  color: blue;
}
</style>
