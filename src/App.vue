<template>
  <div id="app">
    <div class="indexTopBgColor">
      <nav-header></nav-header>
    </div>   
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
  .indexTopBgColor{
    height: 568px;
    background:  linear-gradient(to bottom right,#2eb4e9, #5fcff3); 
  }
</style>
