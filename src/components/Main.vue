<template>
  <!-- for now, client'll be unlocked -->
    <div class="main flex">
      <div class="list-friend">
        <p>ok</p>
      </div>
     <!-- <div class="srv-chans">
          <p>test</p>
      </div> -->
      <div class="chan-wrapper">
        <div class="scroll">
          <div class="guild">
            <p id="white" draggable="true">xd</p>
          </div>
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
  width: auto
  height: auto

.main
  background-color: #36393e
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
  background-color: #ffffff
  height: 240px
  width: 444px
  margin-left: 70px
  margin-right: 0
  -webkit-box-direction: normal
  -webkit-box-orient: vertical
  flex-direction: column
  
.friends
  background-color: #36393f
  width: 1920px;
  height: 300px;
  padding-left: 0px;
  margin-left: 71px;

.guild
  height: 36px
  width: 36px
  align-items: center
  padding-top: 15px
  padding-left: 15px

#white
  color: white
</style>
