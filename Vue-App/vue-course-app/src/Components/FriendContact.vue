<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
		<button @click="showAndHideDetails">{{ details ? 'Hide' : 'Show' }} Details</button>
		<button @click="showAndHideFavorite">
			{{ isFavorite === true ? 'Remove' : 'Add' }} Favorite
		</button>
		<ul v-if="details">
			<li><strong>Phone: </strong>{{ phoneNumber }}</li>
			<li><strong>Email: </strong>{{ emailAddress }}</li>
		</ul>
		<button @click="$emit('delete-friend', id)">Delete Contact</button>
	</li>
</template>

<script>
	export default {
		// props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
		props: {
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			phoneNumber: {
				type: String,
				required: true,
			},
			emailAddress: {
				type: String,
				required: true,
			},
			isFavorite: {
				type: Boolean,
				required: false,
				default: false,
				validator: function (value) {
					return value === true || value === false;
				},
			},
		},
		emits: ['favorite-status', 'delete-friend'],
		// emits: {
		//   'friend-favorite': function (id) {
		//     if (id) {
		//       return true;
		//     } else {
		//       return false;
		//     }
		//   },
		// },
		data() {
			return {
				details: false,
			};
		},
		methods: {
			showAndHideDetails() {
				this.details = !this.details;
			},
			showAndHideFavorite() {
				this.$emit('favorite-status', this.id);
			},
		},
	};
</script>
