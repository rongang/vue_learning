<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<demo01 title="hello world"></demo01> -->
	<!-- <demo02></demo02> -->
	<tabview></tabview>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import demo01 from './components/demo01.vue'
// import demo02 from './components/demo02.vue'
import tabview from './components/tabview.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'App',
  components: {
 //    HelloWorld,
	// demo01,
	// demo02,
	tabview
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
  margin-top: 20px;
}
</style>
