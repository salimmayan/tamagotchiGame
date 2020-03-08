export class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.foodLevel = 30;
        setInterval(() => {
            this.consumeFood();
            //console.log(`Food level is ${this.foodLevel}`);
        }, 1000); 

    }

    consumeFood() {
        this.foodLevel--;
    }


}