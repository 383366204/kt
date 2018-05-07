<template>
  <div id="app">
    <div class="indexTopBgColor" :class="{'topHeight':getIndex}">
      <nav-header></nav-header>
      <index-back-ground v-if="getIndex"></index-back-ground>
    </div>
    <transition>
      <router-view class="flex-bottom"/>
    </transition>
    <nav-footer class="stickyFooter"></nav-footer>
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
        this.$store.commit('setIndexFalse');
      }
      else{
        this.$store.commit('setIndexTrue');
      }
    }
  },
  computed:{
    getIndex(){
      return this.$store.state.isIndex;
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
