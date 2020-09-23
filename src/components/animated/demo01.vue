<template>
	<div>
		<button class="btn btn-primary" @click="show = !show">切换</button>
		<transition name="fade"><div class="mycontainer" v-show="show"></div></transition>
		<transition name="myfade"
			enter-active-class="animate__animated animate__bounceInRight" 
			leave-active-class="animate__animated animate__bounceOutRight">
			<div class="mycontainer" v-show="show" 	></div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'animated',
	data: function() {
		return {
			show: true
		};
	}
};
</script>

<style>
div {
	margin: 10px;
}
.mycontainer {
	height: 200px;
	width: 200px;
	background-color: salmon;
}
.fade-enter-active {
	transition: 0.5s;
	animation: ease;
}
.fade-leave-active {
	width: 200px;
	transition: 0.5s;
}
.myfade-enter-active{
	transform: 5s;
}
.fade-enter,
.fade-leave-to {
	width: 300px;
	opacity: 0;
	transform: translateX(200px);
}
</style>
