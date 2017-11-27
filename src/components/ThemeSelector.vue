<template>
  <div class="theme-selector">
    <select v-model="theme">
     <option value="dark">Dark</option>
     <option value="light">Light</option>
   </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    theme: {
      get () {
        return this.$store.state.theme
      },
      set (value) {
        this.$store.commit('changeTheme', value)
        console.log('changed theme to ' + value)
      }
    }
  }
}
</script>

<style lang="sass">
.theme-selector
  text-align: center
</style>
