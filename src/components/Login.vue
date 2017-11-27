<template>
  <div :class="theme" class="login-page">
    <menu-bar/>
    <h1 class="title">Otakoapp</h1>
    <div class="login-container">
      <form class="login-form" action="" method="post">
        <div class="login-input">
          Email:<br><input type="email" name="" value=""><br>
        </div>
        <div class="login-input">
          Password:<br><input type="password" name="" value="">
        </div>
      </form>
    </div>
    <theme-selector/>
  </div>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector'
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {
    'theme-selector': ThemeSelector,
    'menu-bar': MenuBar
  },
  computed: {
    theme () {
      return this.$store.state.theme
    }
  }
}
</script>

<style scoped lang="sass">
.login-page
  text-align: center
  width: 100%
  height: 100%

  .login-input
    padding: 30px
</style>
