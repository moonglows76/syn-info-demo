<template>
  <ul
    class="maintenance-list"
  >
    <li
      v-for="content in contents"
      :key="content.id"
      class="maintenance-list__item"
    >
      <NuxtLink :to="`/info/maintenance/posts/${content.id}`">
        <span
          :class="content.body[0].category[0] === 'メンテナンス完了' ? 'red' : 'blue'"
        >
          {{ content.body[0].category[0] }}
        </span> {{ content.title }}<br>
        実施日時：<br>
        <div v-html="content.body[0].datetime" />
        対象となる地域：<br>
        <div v-html="content.body[0].areas" />
        対象となるサービス：<br>
        <div v-html="content.body[0].services" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
::v-deep {
  p {
    margin: 0;
  }
}
.red {
  background: red;
  color: #fff;
}
.blue {
  background: blue;
  color: #fff;
}
</style>
