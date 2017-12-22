<template>
  <div>
    <h1 class="title">Error 404</h1>
    <router-link :to="{ name: 'Main' }">
      <p class="safety">Uh oh! Something bad happened.</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped lang="sass">
.safety
  text-align: center
</style>
