// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            humanHealth: 100,
            attackCount: 0,
            winner: null
        };
    },
    watch: {
        humanHealth(value) {
            // @ts-ignore
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            // @ts-ignore
            if (value <= 0 && this.humanHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value <= 0) {
                this.winner = 'human';
            }
        },
        
    },
    computed: {
        monsterHealthBar() {
            return { width: this.monsterHealth + '%' };
        },
        humanHealthBar() {
            return { width: this.humanHealth + '%' };
        },
        specialAttackVisible() {
            return this.attackCount % 3 !== 0;
        }
    },
    methods: {
        getRandomValue(min, max) {
            const value = Math.floor(Math.random() * (max - min)) + min;
            return value;
        },
        attackMonster() {
            this.attackCount++;
            const value = this.getRandomValue(5, 12);
            this.monsterHealth -= value;
            this.attackHuman();
        },
        attackHuman() {
            const value = this.getRandomValue(8, 15);
            this.humanHealth -= value;
            console.log(this.monsterHealth + ' ' + this.humanHealth);
        },
        specialAttackMonster() {
            this.attackCount++;
            const value = this.getRandomValue(10, 20);
            this.monsterHealth -= value;
            this.attackHuman();
        },
        healHuman() {
            this.attackCount++;
            const value = this.getRandomValue(8, 20);
            if (this.humanHealth + value > 100) {
                this.humanHealth = 100;
            }
            else {
                this.humanHealth += value;
            }
            this.attackHuman();
        }
    },
});

app.mount("#game");