<template>
  <div id="app">
    <TopHeader id="header"/>
    <NavBar id="navbar"/>
    <router-view/>
    <TopFooter/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import TopFooter from './components/TopFooter.vue'
import TopHeader from './components/TopHeader.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    TopFooter,
    TopHeader
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
  scroll-behavior: smooth;
}


#navbar{
  z-index: 2;


}

</style>
