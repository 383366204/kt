<template>
  <div id="app">
    <div class="indexTopBgColor" :class="{'topHeight':getIndex}">
      <nav-header></nav-header>
      <index-back-ground v-if="getIndex"></index-back-ground>
    </div>   
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import IndexBackGround from '@/components/IndexBackGround';
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
    NavFooter,
    IndexBackGround
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
