<template>
  <ul
    class="information-list"
  >
    <li
      v-for="content in contents"
      :key="content.id"
      class="information-list__item"
    >
      <!-- お知らせ -->
      <div
        v-if="content.type.id === 'information'"
      >
        <a
          v-if="content.url !== undefined"
          :href="content.url"
          target="_blank"
        >
          <template v-if="content.body[0].info_category[0] === '求人'">【求人】</template>
          <template v-else>【案内】</template>
          {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
        </a>
        <NuxtLink
          v-else
          :to="`/info/posts/${content.id}`"
        >
          <template v-if="content.body[0].info_category[0] === '求人'">【求人】</template>
          <template v-else>【案内】</template>
          {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
        </NuxtLink>
      </div>
      <!-- 障害報告 -->
      <div
        v-if="content.type.id === 'trouble'"
      >
        <NuxtLink :to="`/info/trouble/posts/${content.id}`">
          {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
        </NuxtLink>
      </div>
      <!-- メンテナンス -->
      <div
        v-if="content.type.id === 'maintenance'"
      >
        <NuxtLink :to="`/info/maintenance/posts/${content.id}`">
          {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
        </NuxtLink>
      </div>
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

<style>

</style>
