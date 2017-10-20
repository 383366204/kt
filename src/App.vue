<template>
  <div id="app">
    <nav-header></nav-header>   
    <router-view/>
    <!-- <nav-footer></nav-footer> -->
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import "@/assets/css/base.css";

export default {
  name: 'app',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
