//1- Var-> LET and CONST
console.log("Let and Const")

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

let a  = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);


let i  = 100;

for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i);



function logName() {
  const nameLog = "John";
  console.log(nameLog);
}

const nameLog = "Peter";

logName();
console.log(nameLog);

console.log("---------------------------------------------------------------")
//2- Arrow function
console.log("Arrow function")

const sum = function(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greating = (name) => {
  if(name) {
    return `Hello ${name}!`;
  } else {
    return "Hello!";
  }
}

console.log(greating("Ivan"));

console.log(greating());

const testeArrow = () => console.log("Testou!");

testeArrow();


const user = {
  name: "Theo", 
  sayUserName(){
    var self = this
    setTimeout(function () {
      console.log(self)
      console.log("Username:" + self.name)
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log("Username:" + this.name)
  }, 700)
}
}

//user.sayUserName();
//user.sayUserNameArrow();


console.log("---------------------------------------------------------------")
//3- Filter
console.log("Filter")

const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
})

console.log(highNumbers)


const users = [{name: "Ivan", available: true}, 
{name: "Maria", available: false}, 
{name: "João", available: false}, 
{name: "Marcos", available: true}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

console.log("---------------------------------------------------------------")
//4- Map
console.log("Map")

const products = [
{name: "Camisa", price: 99.50, category: "Clothes"}, 
{name: "Chaleira Elétrica", price: 199.65, category: "Electro"},
{name: "Fogão", price: 400, category: "Electro"}, 
{name: "calça jeans", price: 50.99, category: "Clothes"},
]

products.map((product) => {
  if (product.category === "Clothes") {
    product.onSale = true;
  } else {
    product.onSale = false;
  }
}
)

console.log(products)


console.log("---------------------------------------------------------------")
//5- Template literals
console.log("Template literals")

const userName = 'Ivan';
const age = 40;

//Old
console.log('Olá, ' + userName + '! Vocé tem ' + age + ' anos.');

//New
console.log(`Olá, ${userName}! Vocé tem ${age} anos.`);



console.log("---------------------------------------------------------------")
//6- Destructuring
console.log("Destructuring");

//Arrays
const fruits = ['Banana', 'Maçã', 'Uva'];

const [f1, f2, f3] = fruits;

console.log(f3);


//Objects
const productsDetails = {
  name: "Mouse",
  price: 99.50,
  category: "Periféricos",
  color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productsDetails;

console.log(`O nome do produto é ${productName}, ele custa ${price} e pertence a categoria ${productCategory}.`);


console.log("---------------------------------------------------------------")
//7- Spread Operator
console.log("Spread Operator");

//Arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

//Objects
const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 10000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car);


console.log("---------------------------------------------------------------")
//8- Classes
console.log("Classes");


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount)/100);
  }
}

const shirt = new Product("Camisa gola V", 69.50);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis verde", 120);

console.log(tenis.name);
console.log(tenis.productWithDiscount(20));



console.log("---------------------------------------------------------------")
//9- Herança
console.log("Herança");


class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    })
  }
}

const hat = new ProductWithAttributes("Chapéu", 150, ["Preto", "Azul", "Branco"]);

console.log(hat.name);
console.log(hat.price);
console.log(hat.colors);
hat.showColors();

//Método herdado da classe anterior:
console.log(hat.productWithDiscount(35));