<template>
  <div id="app">
    <div class="indexTopBgColor" :class="{'topHeight':getIndex}">
      <nav-header></nav-header>
      <index-back-ground v-if="getIndex"></index-back-ground>
    </div>   
    <router-view class="flex-bottom"/>
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
      console.log(this.$route.path);
      if(this.$route.path!="/"){
        this.isIndex = false;
      }
      else{
        this.isIndex = true;
      }
    }
  },
  computed:{
    getIndex(){
      return this.isIndex;
    }
  },
  watch: {
      "$route.path": "judgeIndex"
  },
  beforeMount: function () {
      this.judgeIndex();
  }
}
</script>

<style>
  .topHeight{
    height: 568px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
</style>
