<template>
  <div id="app">
    <HeaderVue />
    <div class="body">
      <router-view />
      <landing-page/>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
import LandingPage from './views/LandingPage.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
    LandingPage
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
  margin-top: 0px;
}

.body {
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>

