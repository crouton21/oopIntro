class Pizza {
    constructor(ingredients = 'cheese'){
        this.ingredients = ingredients.split(' ');
        //console.log(this.ingredients);
    }
    calculateCost(){
        let cost = 10;
        this.ingredients.splice(0, 'cheese');
        console.log(this.ingredients);
        if (this.ingredients == ["cheese"]){
            cost = 10;
        }
        else{
        for (let ingredient of this.ingredients){
            cost += 0.99;
        }
        }
        //this.ingredients.push('cheese');
        return cost;
    }
}

class Order {
    constructor(pizzas){
        this.pizzas = pizzas;
    }
    returnTotalCost(){
        console.log('pizzas:', this.pizzas);
        let totalCost = 0;
        for (let pizza of this.pizzas){
            totalCost += pizza.calculateCost();
        }
        console.log('total cost in order class:', totalCost);
        return totalCost;
    }
}

class VeggiePizza extends Pizza {
    constructor(){
        super('onions peppers tomatoes mushrooms');
    }
}

class CheesePizza extends Pizza {
    constructor(){
        super();
    }
}

class PepperoniPizza extends Pizza{
    constructor(){
        super('pepperoni');
    }
}

let myVeggiePizza = new VeggiePizza();
console.log('my veggie pizza:', myVeggiePizza, 'cost =', myVeggiePizza.calculateCost());
let myPepperoniPizza = new PepperoniPizza();
console.log('my pepperoni pizza:', myPepperoniPizza, 'cost =', myPepperoniPizza.calculateCost());
let myCheesePizza = new CheesePizza();
console.log('my cheese pizza:', myCheesePizza, 'cost =', myCheesePizza.calculateCost());

let myOrder = (new Order ([new VeggiePizza(), new VeggiePizza(), new PepperoniPizza()])).returnTotalCost();