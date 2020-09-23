<!-- <template>
	<div class="map"><slot></slot></div>
</template>

<script>
import googlemapmarker from 'GoogleMapMarker.vue'
import google from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM'
export default{
	name:'google-map',
	provide:function(){
		return {
			getMap:this.getMap
		}
	},
	data:function(){
		return {
			map:null
		}
	},
	mounted:function(){
		this.map = new google.maps.Map(this.$el,{
			center:{lat:0,lng:0},
			zoom: 1
		});
	},
	methods:{
		getMap(found){
			var vm = this;
			function checkForMap(){
				if(vm.map){
					found(vm.map);
				}else{
					setTimeout(checkForMap,50);
				}
			}
			checkForMap();
		}
	},
}
</script>

<style>
.map {
	width: 100%;
	height: 400px;
}
</style>
 -->