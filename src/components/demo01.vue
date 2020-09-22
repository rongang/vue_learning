<template>
<div>
	<h1 class="w-25">{{title}} {{a}}</h1>
</div>
	
</template>

<script>

	export default{
		name:'dmeo01',
		props:{
			title:{
				default:'title'
			}
		},
		methods:{
			
		},
		data:function(){
			return{
				a:this.title
			}
		}
	}
</script>

<style>
.color{color: aqua;}
h1{color: #2C3E50;}
</style>
