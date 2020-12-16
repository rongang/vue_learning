<template>
	<div class="card-columns border" style="height: 200px;overflow-y:scroll">
		<div style="border: 4px  #000000; width: 90%; height: 200%; margin: 0 auto;">
			<input v-focus class="form-control m-3" />
			<input class="form-control m-3" />
		</div>
		<UpOutlined />
	</div>
</template>

<script>
export default {
	name: 'directive01',
	mounted() {
	},
	directives: {
		focus: {
			inserted: function(el) {
				console.log(el);
				el.focus();
			}
		}
	}
};
</script>

<style></style>
