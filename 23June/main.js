'use strict';
// //   let user = new Object();  // es ufro nelia.
// //   let user_2 = {};  //es ufro swrafia.
// //   user_2.name = "User 2";
// //   user_2.age = 30;

//   // JSON
//   let user = {
//        name: "John",
//        age: 33
//   }



// //   console.log(user.name, user["age"]);
// //   user.isAdmin = true;
// //   Object.defineProperty(user, "lastname", {
// //       value: "Doe",
// //       writable: false,
// //       configurable: false,
// //       enumerable: false,

// //   })
 
// //   Object.defineProperty(user_2,  {
// //       name: {value: "Test", writable: false,};
// //       lastname: {value: "lastname", writable: false,}

// //   }

// //   console.log(user.lastname)
// //   console.log(user.name, user['age'], user['isAdmin']);
// //   delete user.age;
// //   console.log(user.name, user['age'], user['isAdmin']);
// //   let key = prompt("enter key:,", 'name');

// //   alert(user[key]);
//   /*
//   value  => false/true;
//   writable,  
//   enumarable, 
//   configurable => deletes gamoyneeba shegvidzlia tu ara
//   */

// //   Exercise 1
// //   let object = {
// //      name: "Laptop",
// //      price: 1200,
// //   };

// //   object.price = 1000;
// //   document.writeln(object.name, object.price);
// //   delete object.name;
// //   console.log(user.name, user.price);

// let speed = 300;
// let color = "black";
// let year = 2018;

// let car = {
//     speed,
//     color,
//     year,
//     engine: 6.3,
//     beep(){
//         alert(" pipipi");
//     },
// }
// car.beep();
// let car_2 = car;
// console.log(car_2);
// Object.defineProperty(car, 'speed', {
//     value: speed,
//     enumerable: false,
// })
// console.log(car);
// // console.log('age' in car);
// // console.log("engine" in car);

// for (let key in car){
//          console.log(`key: ${key}, value: ${car[key]}`)
// }

// // let salaries = {
// //     John: 100,
// //     Ann : 160,
// //     Peter: 130,
// // }
// // let sum = 0;
// // for( let key in salaries){
// //     sum += salaries[key];
// // }


// // console.log(sum);


// const myConst = {
//     name: "const"
// }
// myConst.new = 'new';
// console.log(myConst);



// let clone = Object.assign({}, user);
// console.log(user, clone);

// user.sayHi = function(){
//     // alert("hello");

//     alert(this.name);
// }

// user.sayHi();



// function blaBlaBla(){
//     alert(this);
// }
// blaBlaBla();


// let userV2 ={
//     name: "javascript",
//     sayHi(){
//         let func = () => alert(this.name);
//         func();
//     }
// }
// userV2.sayHi();
//davaleba 2
// let calculator = {
//     v1: 15,
//     v2: 20,
//     read(){
//         return (this.v1, + " " + this.v2);
//     },
//     sum(){
//         return this.v1 + this.v2;
//     },
//     mul(){
//         return this.v1 * this.v2;
//     },
// }
// alert(calculator.read());
// alert(calculator.sum());
// alert(calculator.mul());
// //  davaleba 2 end

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// };

// let user = makeUser();
// alert(user.ref.name);
// console.log(user.ref.name);


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () {
//         alert(this.step);
//     }
// };

// ladder.up().up().down().showStep(); 
// // ladder.up();
// // ladder.up();
// // ladder.showStep();


// let calculator = {
//     v1: 20,
//     v2: 30,

//     read() {
//         return ("The numbers are " + this.v1 + " and " + this.v2);
//     },
//     sum(){ 
//         return this.v1 + this.v2;

//     },
//     mul() {
//         return this.v1 * this.v2;
//     }
// }

// console.log(calculator.read());
// console.log(calculator.sum());
// alert(calculator.mul());




// function greet(){ 
//     alert(this.name);
// }

// function  say(time, phrase) {
//     alert(`[${time}] ${this.name}: ${phrase}`);
// }

// call, apply
// let client = {name: "client"};
// let admin = {name : "admin", age: 33};
// let john = {name: "JOHN"}

// greet.call(client);
// greet.call(admin);
// say.call(john, "10:00", "hello");

// let message = ['10:00', 'Hello'];
// say.apply(john, message);



// let id = Symbol(`id`);
// let id1 = Symbol(`id`);

// console.log(id === id1);
// john[id] = "ID Value";

// console.log(john[id]);
// // console.log(john);
// for( let key in john){
//     console.log(key);
// }


// let customer = {
//     name: "super",
//     [id]: 140,
// }

// console.log(customer[id]);

// function User(name){
//     this.name = name;
//     this.isAdmin = false;

//     this.hello = function() {
//            alert(`my name is: ${this.name}`)
//     }
// }
// let conUser = new User("new User");
// let conUser1 = new User("new user1");
// console.log(conUser);
// conUser.hello();
// conUser1.hello();


// function Calculator() {
//     this.v1 = 5;
//     this.v2 = 6;

//     this.read = function read(){
    
//         return (this.v1, + " " + this.v2);
//     }
//     this.sum = function sum(){
//         return this.v1 + this.v2;
//     }
//     this.mul =function mul(){
//         return this.v1 * this.v2;
//     }
// }

// let calculator = new Calculator();

// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());

function Acumulator(startingValue){
   this.currentvalue = startingValue;

   this.read = function() {
      return this.currentvalue += Number(prompt("enter ur number"));
   }
   
}


let acumulator = new Acumulator(10);

alert(acumulator.read());
alert(acumulator.read());
alert(acumulator.read());
alert(acumulator.read()); 