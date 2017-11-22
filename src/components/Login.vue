<template>
  <div>
    <h1>Otakoapp</h1>
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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="sass">
.login-container
  text-align: center

  .login-input
    padding: 20px
</style>
