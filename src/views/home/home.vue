<template>
  <div>
    <h3>欢迎 {{name}}</h3>
    <a href="#" @click="quit">注销登录</a>
  </div>
</template>
<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
export default {
  name: 'Home',
  data () {
    return {
      name:'',
      msg: 'Welcome to Home'
    }
  },
  mounted(){
    let uname = getCookie('username')
    this.name = uname
    if(uname == ""){
      this.$router.push('/')
    }
  },
  methods:{
      quit(){
          delCookie('username')
      }
  }
}
</script>

<style scoped>
</style>
