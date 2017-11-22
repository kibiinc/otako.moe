<template>
  <div id="app" :class="theme">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    theme () {
      return this.$store.state.theme
    }
  }
}
</script>

<style lang="sass">
@import 'assets/main.sass'
</style>
