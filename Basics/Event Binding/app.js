// @ts-ignore
const app = Vue.createApp({ 
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert('Form Submitted!');
    },
  }
});

app.mount('#events');
