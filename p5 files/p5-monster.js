//Define Monster class that accepts object
module.exports = class Monster {
    constructor ({
        monsterName = "Unknown",
        minimumLife = 0,
        currentLife = 100
    }) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = (currentLife >= minimumLife);
    }
    
     //function updateLife()
     updateLife(lifeChangeAmount = 0) {
        this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
        this.isAlive = (this.currentLife < this.minimumLife ? 'false' : 'true');
    } 
   
   
    //function randomLifeDrain()
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        let getRandomInteger = Math.floor(Math.random() * ((maximumLifeDrain + 1) - minimumLifeDrain) + minimumLifeDrain);
        this.currentLife = this.currentLife - getRandomInteger
        console.log(`${this.monsterName} random power drain of ${getRandomInteger}`);
    }
}