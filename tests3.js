const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami"
  }
};

let {
  name,
  age,
  favoriteMusic,
  address: { number: newStreetVariableName }
} = person;

console.log(newStreetVariableName )

const numbers = ["one", "two", "three", "four", "five"];

const [,,,, third] = numbers;
console.log(third);

const [, second] = numbers;
console.log(second);

let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);

function add() {
  let sum = 0;
  console.log(arguments)
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(1, 2, 5, 8);

class Counter {
  constructor() {
    this.count = 1;
  }

  countUp() {
    setInterval(function() {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

var myCounter = new Counter();
myCounter.countUp();