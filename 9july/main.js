// first class citizen
// local scopre. block scope => lexical scope[environment]

// {
// block scope
// }

// function a(){
    //local scope
// }

// outer Environment
// let text = "my text";
// function tell(text){
//     //inner Environment
//     console.log(`${text}, ${name}`);
// }

// inner -> outer shidas kkoveltvis aqvs wvdoma gareta garemoze magram piriqit ara
// outer ->
// tell("Gela");

// function saySomething(firstname, lastname){
//     // private function
//     function getFullName(){
//         return `${firstname} ${lastname}`;
//     }
//     console.log(`Hello, ${getFullName()}`)
//     console.log(`Bye, ${getFullName()}`)

// }

// saySomething("dat", "qrs");
// function counter(){
    // let count = 0;
// 
    // return function(){
        // return (count += 1);
    // }
    // return undefined << es aris kvela funkciashi defaultad
// }
// let myCounter = counter();
// let myCounter2 = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log('Break');

// console.log(myCounter2());
// console.log(myCounter2())
// let cached = saySomething('firstname', 'lastname');

// {
//     let message  = "helo from block scope!|";
//     console.log(message);
// }
// IIFE     
// (function(){
    // let message = "hello from local scope";
    // console.log(message);
// })()

let arr = [1,2,3,4,5,6,7];

    function inBetween(a,b){
      return function(x){
          if(a <=x && x <= b){
             return true;
          }
      }
    }
    // function inBetween(from,to){
        // return function(item){
            // return (item >= from) && (item <= to);
        // }
    // }
//     function inArray(arr){
//         return function(iteem){
//             return arr.includes(iteem);
            
//         }
//     }


// alert(arr.filter(inBetween(3,6)));
// alert(arr.filter(inArray([2,1,10])));


//prototype -> Object() პროტოტიპი არის ობიექტი;

let myFunc = function(){}
// console.log(myFunc.prototype)
Array.prototype.myVar = 'MyVar Value';
let newArr = new Array();

// new.arr_proto_.myvar = "new";
// console.log(Array.prototype.myVar);
// console.log(newArr.__proto__.myvar);
// ___proto___
let animal = {
   eats: true,
   walk() {
       console.log("animal walk!...");
   }
}

let dog = {
    barks: true,
}
dog.__proto__ = animal;

let Lekvi = {
    age : 1,
    __proto__: dog,

}

// console.log(dog.eats);
// console.log(dog.barks);
// dog.walk();
console.log(Lekvi);
Lekvi.walk();