<template>
	<div class="card-columns border" style="height: 200px;overflow-y:scroll" >
		<div style="border: 4px  #000000; width: 90%; height: 200%; margin: 0 auto;">
			<form>
				<input class="form-control m-3" v-focus />
				<input class="form-control m-3" v-focus autofocus />
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'directive01',
	directives: {
		focus: {
			inserted: function() {
				// el.focus()
			}
		}
	}
};
</script>

<style></style>
