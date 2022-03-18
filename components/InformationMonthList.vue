<template>
  <ul class="information-month-archive">
    <li
      class="information-month-archive__item"
      v-for="month in $publishedMonths(contents)"
      :key="month"
    >
      <NuxtLink
        :to="`${urlByType}${month}`"
        class="information-month-archive__link"
      >
        {{ $dayjs(month).format('YYYY年M月') }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'information',
    },
    contents: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    urlByType() {
      const urls = {
        information: '/info/archives/',
        trouble: '/info/trouble/archives/',
        maintenance: '/info/maintenance/archives/',
      }
      return urls[this.type]
    }
  }
}
</script>

<style>

</style>
