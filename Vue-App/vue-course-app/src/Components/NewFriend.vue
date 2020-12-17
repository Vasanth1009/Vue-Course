<template>
	<form @submit.prevent="submitFriend">
		<div>
			<label><strong>Name:</strong></label>
			<input type="text" placeholder="Friend Name" v-model="enteredName"/>
		</div>
		<div>
			<label><strong>Phone:</strong></label>
			<input type="tel" placeholder="Friend Phone No." v-model="enteredPhone" />
		</div>
		<div>
			<label><strong>Email:</strong></label>
			<input type="email" placeholder="Friend Email" v-model="enteredEmail" />
		</div>
		<div>
			<button>Add Friend</button>
		</div>
	</form>
</template>

<script>
	export default {
		emits: ['add-friend'],
		data() {
			return {
				enteredName: '',
				enteredPhone: '',
				enteredEmail: '',
			}
		},
		methods: {
			submitFriend() {
				this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredEmail);
			}
		},
	};
</script>
