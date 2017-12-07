<template>
  <div :class="theme" class="login-page">
    <menu-bar/>
  <div class="auth">
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
    <login/>
    <br>
    <theme-selector/>
    <p class="beta-note">This app is under alpha stage. Some features may not be complete.</p>
  </div>
 </div>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector'
import MenuBar from '@/components/MenuBar'
import LoginButton from '@/components/LoginButton'

export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {
    'theme-selector': ThemeSelector,
    'menu-bar': MenuBar,
    'login': LoginButton
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

.auth
  margin: 40px 490px auto
  width: 940px
</style>
