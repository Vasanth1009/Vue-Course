<template>
	<section>
		<header>
			<h1>FriendList</h1>
		</header>
		<new-friend @add-friend="addFriend"></new-friend>
		<ul>
			<friend-contact
				v-for="friend in friendList"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@favorite-status="favoriteStatus"
				@delete-friend="deleteFriend"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				friendList: [
					{
						id: 'manuel',
						name: 'Manuel Lorenz',
						phone: '01234 5678 991',
						email: 'manuel@localhost.com',
						isFavorite: true,
					},
					{
						id: 'julie',
						name: 'Julie Jones',
						phone: '09876 543 221',
						email: 'julie@localhost.com',
						isFavorite: false,
					},
				],
			};
		},
		methods: {
			favoriteStatus(friendId) {
				const identifiedFavoriteStatus = this.friendList.find(
					(friend) => friend.id === friendId
				);
				identifiedFavoriteStatus.isFavorite = !identifiedFavoriteStatus.isFavorite;
			},
			addFriend(name, phone, email) {
				const addNewFriend = {
					id: new Date().toISOString(),
					name: name,
					phone: phone,
					email: email,
					isFavorite: false,
				};
				this.friendList.push(addNewFriend);
			},
			deleteFriend(friendId) {
				this.friendList = this.friendList.filter((friend) => friend.id !== friendId);
			},
		},
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Jost', sans-serif;
	}

	body {
		margin: 0;
	}

	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: #58004d;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#app li,
	#app form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app h2 {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #58004d;
		margin: 0 0 1rem 0;
	}

	#app button {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.3rem 1rem;
		margin: 0.3rem;
		border-radius: 0.3rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
		outline: none;
	}

	#app button:hover,
	#app button:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}

	#app input {
		font: inherit;
		font-size: 1rem;
		border: 2px solid #ff0077;
		padding: 0.5rem 1rem;
		border-radius: 1.5rem;
		margin: 0.5rem;
		outline: none;
		width: 90%;
	}

	#app input:focus {
		outline: none;
		border-color: #ff0077;
		background-color: #ffd3e7;
	}

	#app label {
		text-align: left;
	}
</style>
