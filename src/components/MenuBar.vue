<template>
    <div class="menu" :class="{ hidden: !visible }">
      <svg class="menu-item" width="12" height="12" viewBox="0 0 12 12"><rect fill="#ffffff" width="10" height="1" x="1" y="6"></rect></svg>
      <svg class="menu-item" width="12" height="12" viewBox="0 0 12 12"><rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="#ffffff"></rect></svg>
      <svg class="menu-item exit" width="12" height="12" viewBox="0 0 12 12"><polygon fill="#ffffff" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon></svg>
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
