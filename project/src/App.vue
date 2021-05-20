<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { recommend } from '@/api/index'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    this.getRecommend()
  },
  methods: {
    getRecommend() {
      recommend().then((res) => {
        console.log('res', res)
      })
    }
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
  margin-top: 60px;
}
</style>
