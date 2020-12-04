// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 10) {
        // @ts-ignore
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   }
    //   else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      console.log('Running...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    }
  },
});

app.mount('#events');
