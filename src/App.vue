<template>
  <McqTest msg="Welcome to Your Vue.js App"/>
</template>

<script>
import McqTest from './components/McqTest/McqTest.vue'

export default {
  name: 'App',
  components: {
    McqTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
