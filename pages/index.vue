<template>
  <div class="container">
    <h1>トップ</h1>
    <h1>シナプスからのお知らせ</h1>
    <p><NuxtLink to="/info">お知らせ一覧へ</NuxtLink></p>
    <ul
      v-for="content in contents"
      :key="content.id"
      class="information-list"
    >
      <!-- お知らせ -->
      <li
        v-if="content.type.id === 'information'"
        class="information-list__item"
      >
        <a
          v-if="content.url !== undefined"
          :href="content.url"
          target="_blank"
        >
          <template v-if="content.body.info_category==='求人'">【求人】</template>
          <template v-else>【案内】</template>
          {{ content.title }}
        </a>
        <NuxtLink
          v-else
          :to="`/info/posts/${content.id}`"
        >
          <template v-if="content.body.info_category==='求人'">【求人】</template>
          <template v-else>【案内】</template>
          {{ content.title }}
        </NuxtLink>
      </li>
      <!-- 障害報告 -->
      <li
        v-if="content.type.id === 'trouble'"
        class="information-list__item"
      >
        <NuxtLink :to="`/info/trouble/posts/${content.id}`">
          {{ content.title }}
        </NuxtLink>
      </li>
      <!-- メンテナンス -->
      <li
        v-if="content.type.id === 'maintenance'"
        class="information-list__item"
      >
        <NuxtLink :to="`/info/maintenance/posts/${content.id}`">
          {{ content.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const { contents } = await $microcms.get({
      endpoint: 'info',
    })
    return {
      contents
    }
  }
}
</script>
