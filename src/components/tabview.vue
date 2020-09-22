<template>
	<div>
		<div class="container align-content-around p-0">
			<div class="row">
				<div class="col-2 border-right tab align-self-center">
					<!-- <div class="list-group w-100 btn-light"> -->
					<button :class="btnstyle">1</button>
					<button :class="btnstyle">2</button>
					<button :class="btnstyle">3sdfsfsdsdf</button>
					<!-- </div> -->
				</div>
				<div class="col">content</div>
			</div>
		</div>
	</div>
</template>

<script>
// import demo02 from 'demo02.vue';
export default {
	name: 'tabview',
	data: function() {
		return {
			btnstyle: 'btn border w-100 m-1 overflow-hidden p-1'
		};
	},
	props: {
		title: String,
		// content: {
		// 	default: function() {
		// 		return demo02;
		// 	}
		// }
	}
};
</script>

<style>
.tab {
	width: auto;
	/* background-color: #002752; */
}
</style>
