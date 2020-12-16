import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './Components/FriendContact.vue';
// import NewFriend from './Components/NewFriend.vue';

const app = createApp(App);
app.component('friend-contact', FriendContact);
// app.component('new-friend', NewFriend);
app.mount('#app');
