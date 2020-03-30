const Pizza = require("./pizza");
const pepperoni = new Pizza();

pepperoni
  .setBase("Whole Wheat")
  .setSauce("Tomato Basil")
  .setCheese("Smoked Mozzarella")
  .setToppings(["Pepperoni", "Basil"])
  .bake();
