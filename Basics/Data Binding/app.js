// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Master in Vue!',
            courseGoalB: 'Learn Vue!',
            courseLink: 'https://v3.vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const value = Math.random();
            if (value < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');