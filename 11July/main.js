let animal = {
    eats: true
}

function Dog(name){
    this.name = name;
}

Dog.prototype = animal;

let jeka = new Dog('White Jeka');
console.log(jeka.eats);

// __proto__ -> Parent
// prototype -> Cloned Value

console.log(Dog.prototype.constructor === Dog);

// let obj = {
// 
// }
// console.log(obj.toString());
//1
let newObject = {}
//2
let newObject1 = Object.create(Object.prototype);
//3
let newObject2 = new Object();

// პირველი ხერხი პროფერთის შექმნისთვის
newObject.someKey = "hello world,first property";
console.log(newObject.someKey)
//2
newObject1['someKey'] = "hello World1"
console.log(newObject1['someKey']);
//3 
Object.defineProperty( newObject2, 'someKey', {
    value: 'someKey',
    writable: true,
    configurable: true,
    numerable: true,
})

function defineProp(obj, key, value){
    let config = {
        value, 
        writable: true,
        configurable: true,
        numerable: true,
    }
    Object.defineProperty(obj, key, config);
}

let person = Object.create( Object.prototype );

defineProp(person, 'car', 'supercar')
defineProp(person, 'dateOfBirth', '1970')
defineProp(person, 'hasBeard', true);

Object.defineProperties(person,{
    'key':{
        value: 'key',
        writable: true,
        configurable: true,
        numerable: true,
    },
    'key2':{
        value: 'key2',
        writable: true,
        configurable: true,
        numerable: true,
    }
})

console.log(person);


let driver = Object.create( person );
defineProp(driver, 'topSpeed', '180kmph')

console.log(driver);

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;

    // this.toString = function(){
    //     return `${this.model} has done ${this.miles}`
    // }
}

Car.prototype.toString = function(){
            return `${this.model} has done ${this.miles}`

}
let civic = new Car("Honda Civic", 2017, 24564);
let bmw = new Car("BMW", 2001, 222200);
        // console.log(driver.toString())
        // console.log(civic.toString())
        // console.log(bmw.toString())



function generateNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
// generateNumber();
// generateNumber();
// console.log(generateNumber());
// console.log(generateNumber())

function too(fun, x){
  let current = 0;

  return function(){
      if(current < x){
           current += 1;
           return fun();
      }
      return undefined
  }
   
}
let steps = too(generateNumber, 3);
console.log(steps());
console.log(steps());
console.log(steps());
console.log(steps());

