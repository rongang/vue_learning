<!-- <template>
	<h1></h1>
</template>

<script>
import google from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM';
export default {
	name: 'google-map-marker',
	inject: ['getMap'],
	props: ['places'],
	created: function() {
		var vm = this;
		vm.getMap(function(map) {
			vm.places.forEach(function(place) {
				new google.maps.Marker({
					position: place.position,
					map: map
				});
			});
		});
	},
	// render: h => null
};
</script>

<style></style>
 -->