<template>
  <main class="d-flex flex-column">
    <TheBanner />
    <TheFeatureArea />
  </main>
</template>

<script>
import TheBanner from '~/components/banner/TheBanner.vue'
import TheFeatureArea from '~/components/card/TheFeatureArea.vue'

export default {
  name: 'Index',
  components: { TheFeatureArea, TheBanner }
}
</script>

<style scoped lang="sass">
main
  height: 1000px
</style>
