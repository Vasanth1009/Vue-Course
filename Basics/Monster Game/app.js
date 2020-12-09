// @ts-ignore
const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            humanHealth: 100,
            attackCount: 0,
            winner: null,
            logMessages: [],
        };
    },
    watch: {
        humanHealth(value) {
            // @ts-ignore
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
                // @ts-ignore
                this.humanHealth = 0;
                this.monsterHealth = 0;
            } else if (value <= 0) {
                this.winner = 'monster';
                // @ts-ignore
                this.humanHealth = 0;
            }
        },
        monsterHealth(value) {
            // @ts-ignore
            if (value <= 0 && this.humanHealth <= 0) {
              this.winner = 'draw';
              // @ts-ignore
              this.humanHealth = 0;
              this.monsterHealth = 0;
            }
            else if (value <= 0) {
                this.winner = 'human';
                this.monsterHealth = 0;
            }
        },
        
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            else {
                return { width: this.monsterHealth + '%' };
            }
        },
        humanHealthBar() {
            if (this.humanHealth < 0) {
                return { width: '0%' };
            }
            else {
                return { width: this.humanHealth + '%' };
            }
        },
        specialAttackVisible() {
            return this.attackCount % 3 !== 0;
        },
        healVisible() {
            return this.attackCount % 2 !== 0;
        }
    },
    methods: {
        newGame() {
            this.monsterHealth = 100;
            this.humanHealth = 100;
            this.attackCount = 0;
            this.winner = null;
            this.logMessages = [];
        },
        getRandomValue(min, max) {
            const value = Math.floor(Math.random() * (max - min)) + min;
            return value;
        },
        attackMonster() {
            this.attackCount++;
            const value = this.getRandomValue(5, 12);
            this.monsterHealth -= value;
            this.battleLog('You', 'attack', value)
            this.attackHuman();
        },
        attackHuman() {
            const value = this.getRandomValue(8, 15);
            this.humanHealth -= value;
            console.log(this.monsterHealth + ' ' + this.humanHealth);
            this.battleLog('Monster', 'attack', value);
        },
        specialAttackMonster() {
            this.attackCount++;
            const value = this.getRandomValue(10, 20);
            this.monsterHealth -= value;
            this.battleLog('You', 'attack', value);
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
            this.battleLog('You', 'heal', value);
            this.attackHuman();
        },
        surrender() {
            this.winner = 'monster';
        },
        battleLog(player, work, health) {
            this.logMessages.unshift({
                actionBy: player,
                actionType: work,
                actionValue: health
            });
        }
    },
});

app.mount("#game");