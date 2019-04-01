

class Tomagotchi {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
    }
    getHunger() {
        console.log('Feed me!!');
    }
    getSleepiness() {
        console.log('I\'m tired...');
    }
    getBoredom() {
        console.log('Play with me');
    }
};
const sky = new Tomagotchi('Sky', 1); // instatiate your Tomagotchi
console.log(sky);

// create method then create button that invokes the function
// setInterval (() = timer in milli-second
// clearInterval = clears timer \\\\\


// display the following metrics for you pet
/// hunger (1-10 scale)
const getHunger = (pet) => {
let hungerLevel = pet.hunger
    if (hungerLevel > 5) {
        pet.getHunger()
    } else {
        console.log('Snack time!');
    }
    
}

const getSleepiness = (pet) => {
let energyLevel = pet.sleepiness
    if (energyLevel > 5) {
        pet.getSleepiness()
    } else {
        console.log('SUGAR HIGH!!');
    }

}

const getBoredom = (pet) => {
let boredomLevel = pet.boredom
    if(boredomLevel > 3) {
        pet.getBoredom()
    } else {
        console.log('Bi bop bi bop');
    }
}