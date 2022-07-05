class Ninja{
    constructor(name, health=10, speed=3, strength=3){
        this.name = name;
        this.health = health; 
        this.strength = strength;
        this.speed = speed;
    }

    sayName() {
        console.log(this.name);
    }

    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }

    drinkSake(){
        this.health += 10;
    }


}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.drinkSake();
// ninja1.sayName();
// ninja1.showStats();


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Fortune favors the bold")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"