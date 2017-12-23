<template>
  <!-- for now, client'll be unlocked -->
  <div class="main flex"> 
    <p>test<p>
    <div class="chan-wrapper">
      <div class="scroll">
        <!-- insert guilds here. -->
      </div>
    </div>
  </div>
</template>

<script>
// insert login script here :^)
export default {
  name: 'Main'
}
</script>

<style scoped lang="sass">
.main, flex
  font-family: 'Roboto', sans-serif

.chan-wrapper
  width: 70px
  overflow: hidden
  background-color: #202225
  display: flex
  height: -webkit-fill-available

.chan-wrapper, .scroll
  overflow-x: hidden
  overflow-y: scroll

.flex
  width: 100%

.main
  background-color: #635e59
  text-align: center
  
p 
  margin: 0
  height: 0
</style>
