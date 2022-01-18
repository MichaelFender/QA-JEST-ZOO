class Animal {
    // name and type will be strings, preferredFoods will be an array of strings
    /**
     *
     * @param {String} name - The name of the animal you're creating
     * @param {String} type - The species of animal you're creating
     * @param {Array} preferredFoods - An ARRAY of different foods the animal you're creating prefers
     */
    constructor(name, type, preferredFoods) {
      this.name = name;
      this.type = type;
      this.preferredFoods = preferredFoods;
    }
    /**
     *
     * @param {String} food - The food you want to feed the animal
     * @returns - Whether or not the animal likes the food given to the method
     */
    feed(food) {
      if (this.preferredFoods.includes(food))
        return `${this.name} the ${this.type} likes ${food}!`;
      else return `${this.name} the ${this.type} does not like ${food}!`;
    }
  }
  module.exports = Animal;
// export class ClassName {Animal}