<template>
  <div id="app">
    <SideBar/>
    <Map />
  </div>
</template>

<script>
import SideBar from './components/Sidebar.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
