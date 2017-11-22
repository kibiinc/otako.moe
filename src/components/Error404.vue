<template>
  <div>
    <h1>Error 404</h1>
    <router-link :to="{ name: 'Main' }">
      <p>Get Back to Safety</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
</style>
