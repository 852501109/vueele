<template>
  <div class="main">
    <button @click="clickBtn">点击数量增加</button>
    <span>显示{{itemNum}}</span>
  </div>
</template>
<script>
  import { mapState,mapActions } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      name:'Main',
      msg: 'Welcome to Main'
    }
  },
  methods:{
    clickBtn(){
      this.addNum();
    },
    ...mapActions(['addNum'])
  },
  computed:mapState([
    'itemNum'
  ]),

}
</script>

<style scoped>
</style>
