<template>
	<div class="text-left">
		<div class="btn-group" role="group" aria-label="Basic example">
			<button type="button" class="btn btn-secondary" @click="change(0)">Left</button>
			<button type="button" class="btn btn-secondary" @click="change(1)">Middle</button>
			<button type="button" class="btn btn-secondary" @click="change(2)">Right</button>
		</div>
		<div v-if="index == 0">
			<table class="table table-bordered">
				<tbody>
					<tr>
						<td>
							<ul class="list-group">
									<button @click="btnclick(index)" v-for="(item,index) in items" :key="'item'+index" class="btn m-1 border mw-100">{{item.title}}</button>
							</ul>
						</td>
						<td><p class="text-left flex-nowrap">{{items[subindex].content}}</p></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else-if="index == 1">
			middle
		</div>
		<div v-else>Right</div>
	</div>
</template>

<script>
export default {
	name: 'demo02',
	data: function() {
		return {
			index: 0,
			subindex:0,
			items: [{
				title:'one',
				content:'Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around'
			}, {
				title:'two',
				content:'Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.'
			}, {
				title:'three',
				content:'Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.'
			}]
		};
	},
	methods: {
		change(index) {
			// console.log(this)
			// console.log(index)
			this.index = index;
		},
		btnclick(index){
			this.subindex=index
		},
		fetchdata() {
			
		}
	}
};
</script>

<style>
	div{
		padding: 10px;
	}
</style>
