<template>
  <!-- for now, client'll be unlocked -->
    <div class="main flex">
      <div class="chan-wrapper">
        <div class="scroll">
        </div>
      </div>
      <div class="srv-chans column">
        <p>test</p>
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
html
  overflow-x: hidden
  overflow-y: hidden

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

usr-info
  align-items: center
  display: flex
  margin-bottom: 1px
  padding: 0 10px
  height: 52px
  background: rgba(32,34,37,.3)
  color: #fff

.srv-chans
  background-color: #8c857e
  height: 240px
  width: 444px
  margin-left: 70px

.column
  flex-direction: column

</style>
