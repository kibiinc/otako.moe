<template>
  <div>
    <h1>Otakoapp</h1>
    <div class="login-container">
      <form class="login-form" action="" method="post">
        Email:<br><input type="email" name="" value=""><br>
        Password:<br><input type="password" name="" value="">
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

<style scoped>
.login-container {
  margin: auto;
}
</style>
