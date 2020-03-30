class Pizza {
  setBase(base) {
    this.base = base;
    return this;
  }

  setSauce(sauce) {
    this.sauce = sauce;
    return this;
  }

  setCheese(cheese) {
    this.cheese = cheese;
    return this;
  }

  setToppings(toppings) {
    this.toppings = toppings;
    return this;
  }

  bake() {
    console.log(this);
  }
}

module.exports = Pizza;
