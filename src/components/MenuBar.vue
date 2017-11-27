<template>
    <div class="menu" :class="{ hidden: !visible }">
      <div class="menu-item">&minus;</div>
      <div class="menu-item">&square;</div>
      <div class="menu-item exit">&#9747;</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      visible: window && window.process && window.process.type
    }
  }
}
</script>

<style scoped lang="sass">

.menu
  display: flex
  justify-content: flex-end

  background: #aaa


.menu-item
  padding: 10px
  height: 30px
  width: 30px
  font-size: 20px
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  -o-user-select: none
  user-select: none
  cursor: default

  &:hover
    background: lighten(#aaa, 10%)

  &:hover.exit
    background: red

.hidden
  display: none

</style>
