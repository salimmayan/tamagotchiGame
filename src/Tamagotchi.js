export class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.foodLevel = 10;
        this.onUnconcious;
        this.onDeath;
        this.timer = setInterval(() => {
            this.consumeFood();
            if (this.foodLevel < -5) {
                this.die();
            }
            else if (this.foodLevel <= 0) {
                this.unconcious();
            }
            //console.log(`Food level is ${this.foodLevel}`);
        }, 1000);

    }

    consumeFood() {
        this.foodLevel--;
    }

    feed() {
        this.foodLevel += Math.floor((Math.random() * 9 + 1));
        console.log(`New food level is ${this.foodLevel}`);
    }


    die() {
        clearInterval(this.timer);
        console.log(`Function die(): New food level is ${this.foodLevel}`); 
        this.onDeath();
    }

    unconcious() {
        //console.log(`Function unconcious(): New food level is ${this.foodLevel}`);  
        this.onUnconcious();
    }

}