<template>
  <div id="app">
    <div class="indexTopBgColor" :class="{'topHeight':getIndex}">
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
  data() {
    return{
      isIndex : true
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods:{
    judgeIndex(){
      if(this.$route.path!="/"){
        this.isIndex = false;
      }
    }
  },
  computed:{
    getIndex(){
      return this.isIndex;
    }
  },
  watch: {
      "$route": "judgeIndex"
  }
}
</script>

<style>
  .topHeight{
    height: 568px;
  }
</style>
