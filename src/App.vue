<template>
  <div id="app">
    <div class="indexTopBgColor">
      <nav-header></nav-header>
    </div>   
    <router-view/>
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

</style>
