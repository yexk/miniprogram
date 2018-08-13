<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <el-button>asfasfasf</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <header class="app">haahhahhah
      <div class="div">{{$t('index.yexk')}}</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input: ""
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .div {
    background: #0a060686;
  }
}
</style>
