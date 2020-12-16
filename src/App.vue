<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<hr color="#004085" />
		<demo01 title="hello world"></demo01>
		<hr color="#004085" />
		<demo02></demo02>
		<hr color="#004085" />
		<tabview></tabview>
		<hr color="#004085" />
		<!-- 	<googlemap>
			<googlemapmarker v-bind:places="vueConfCities">
				
			</googlemapmarker>
		</googlemap> -->
		<animated></animated>
		<hr color="#004085" />
		<animattion02></animattion02>
		<hr color="#004085" />
		<mixindemo></mixindemo>
		<hr color="#004085" />
		<directive01></directive01>

		<div style="height: 100rem;"></div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import demo01 from './components/demo01.vue';
import demo02 from './components/demo02.vue';
import tabview from './components/tabview.vue';
// import googlemap from './components/google_map/GoogleMap.vue'
// import googlemapmarker from './components/google_map/GoogleMapMarker.vue'
import animated from './components/animated/demo01.vue';
import animattion02 from './components/animated/demo02.vue';
import mixindemo from './components/mixin/demo01.vue';
import directive01 from './components/directive/demo01.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/animate.min.css';
import 'lodash/lodash.js';
// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM'


export default {
	name: 'App',
	components: {
		HelloWorld,
		demo01,
		demo02,
		tabview,
		// googlemap,
		// googlemapmarker,
		animated,
		animattion02,
		mixindemo,
		directive01,
	}
};
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
