class Animal {
    // name and type will be strings, preferredFoods will be an array of strings
    constructor(name, type, preferredFoods) {
        this.name = name;
        this.type = type;
        this.preferredFoods = preferredFoods;
    }

    feed(food) {
        if (this.preferredFoods.includes(food))
            return `${this.name} the ${this.type} likes ${food}!`;
        else return `${this.name} the ${this.type} does not like ${food}!`;
    }
}

module.exports = {Animal}