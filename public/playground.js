class Car {
  constructor(){
    this.wheels = 4;
    this.type = 'hatchback';
  }
}
class Ford  extends Car{
  constructor(){
    super()
    this.windows = 4;
  }
}


const car = new Car();
const ford = new Ford();

console.log(ford.wheels);

class food {
  constructor(){
    this.sandwich = 7;
    this.type = 'cold foods'
  }
}
class hotfood extends food{
  constructor(){
    super()
    this.extremeGood = true;
  }
}

const newfood = new food();
console.log(newfood.sandwich)
