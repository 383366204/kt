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
/* .indexTopBgColor{
    height: 568px;
    background:  linear-gradient(to bottom right,#2eb4e9, #5fcff3);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); 
  }  */
</style>
