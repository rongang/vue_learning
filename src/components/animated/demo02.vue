<template>
	<div class="text-left">
		<div class="btn-group">
			<button class="btn-group-toggle btn btn-primary" @click="add">添加</button>
			<button class="btn-group-toggle btn btn-danger" @click="del">删除</button>
			<button class="btn-group-toggle btn btn-info" @click="myreverse">反转</button>
		</div>
		<transition-group  name="list" tag="ul">
			<li class="list-item list-inline" v-for="item in items" v-bind:key="item">{{ item }}</li>
		</transition-group>
	</div>
</template>

<script>
	// import shuffle from 'lodash/lodash.js'
export default {
	name: 'animation02',
	// props:{
	// 	nextNum:Int32Array
	// },
	data: function() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum:0
		};
	},
	// computed:{
	// 	nextNum:{
	// 		get:function(){
	// 			this.items.length
	// 		}
	// 	}
	// },
	mounted() {
		this.nextNum = this.items.length
	},
	methods: {
		add() {
			this.items.splice(this.randomindex(), 0, ++this.nextNum);
		},
		del() {
			this.items.splice(this.randomindex(), 1);
		},
		randomindex() {
			return Math.floor(Math.random() * this.items.length);
		},
		myreverse(){
			this.items = this.items.reverse()
		}
	}
};
</script>

<style>
	.list-item{
		transition: all 1s;
	}
/* .list-enter-active, */
.list-leave-active {
	/* transition: 1s; */
	position: absolute;
}

.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateX(20px);
}
/* .list-move {
	transition: all 1s;
} */
</style>
