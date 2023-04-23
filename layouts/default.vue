<template>
  <div id="default">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style scoped lang="sass">
#default
  display: flex
  flex-direction: column
  min-height: 100vh
</style>
