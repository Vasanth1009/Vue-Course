const app = Vue.createApp({
    data() {
        return {
            friendList: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ],
        };
    },
});
app.component('friend-contact', {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="showAndHideDetails">{{ details ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="details">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
          </ul>
        </li>
    `,
  data() {
    return {
      details: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenzo',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    showAndHideDetails() {
      this.details = !this.details;
    }
  },
});
app.mount('#app');

