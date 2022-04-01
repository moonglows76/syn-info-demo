<template>
  <ul class="latest-maintenance-list">
    <li
      v-for="content in contents"
      :key="content.id"
      class="latest-maintenance-list__item"
    >
      <NuxtLink :to="`/info/maintenance/posts/${content.id}`">
        <span
          :class="content.body[0].category[0] === 'メンテナンス完了' ? 'red' : 'blue'"
        >
          {{ content.body[0].category[0] }}
        </span> {{ content.title }}<br>
        実施日時：<br>
        <div>
          {{ $dayjs(content.body[0].datetime_start).format('YYYY年M月D日(ddd) HH:mm') }} 〜 {{ $dayjs(content.body[0].datetime_end).format('YYYY年M月D日(ddd) HH:mm') }}
        </div>
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
    }
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
