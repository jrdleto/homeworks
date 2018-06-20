// let box = document.querySelector('.box');
// box.style.backgroundColor = 'red' ;



// window.onload
// DOMContentLoaded
// function init(){
//     alert('S');
// }
// document.addEventListener('DOMContentLoaded', init);

// window.onload = function(){
//     alert('window.onload');
// }



// hoisted
// function name (){

// }

// not hoisted
// let name = function(){

// }

// getName();
// function getName(){
//     alert('Name');

// }


// let getNameV2 = function(){
//     alert("name2");
// }
// getNameV2();
// IIFE
// ( function(x) {
//     alert(x);
// } )(8);

// function showMessage(from, text){

//     from = ` ${from} `;
//     alert( ` ${from}: ${text} `)
// }


// let from = "John";
// showMessage(from, "hello");  // => John Hello

// alert(from);    // => John

// function sum(x, y) {
//     return x + y;
// }
// let result = sum(10, 3);
// console.log(result);

// function checkMovie(age){
//     if(age < 18) return;
//     alert('acces granted!...')                                                                                                                                                                                                               
// }
// checkMovie(17);
// function nothing(){
//     //Empty
// }

// console.log(nothing() === undefined);

//  function pow(x, n){
//     let result = x ;
//     for ( i=1; i<n; i++){
//         x = x * result;
//     }
//     return x;
// }
// let sum = pow(5 , 3);
// alert(sum);
//  let x = Number(prompt("enter ur number"));
//  function isPrime(x){
//      if(x == 2) {
//          return true;
//      }
//      if(x==1) {
//          return false;
//      }
//      for( i = 2; i < x; i++){
//              if(x% i ==0){
//                  return false;
//              }
//             }
// }
//             return true;
             
     
 

//  for(let z = 1; z <= x; z++){
//      if(isPrime(z)){
//          console.log(z)
//      }
//  }
 

// function ask(question, yes, no){
//     if(confirm(question)){
//         yes()
//     }
//     else {
//         no();
//     }
// }
// function showOkay(){
//     alert("you agreed");
// }
// function showCancel(){
//     alert("You Canceled");
// }
// ask("Areu okay?", showOkay, showCancel);



// (arg1,arg2,arg3, .... argN) =>     {}
// let f = (arg1,arg2,arg3 .... argN) => {}
// function sq(n){
//     return n * 2;
// }
// let sq2 = function(){
//     return n * 2;
// }
// let sq3 = n => n * 2;

// let say = (x) => alert(x);
// say("hello my friend");
// ask (
//     "do u agree?",
//     () => alert("you agreed"),
//     () => alert("you canceled")
// )

// let years = new Array(10);
// let years2 = [10];

// console.log(years.length);
// years.length= 5;
// console.log(years2.length);
// let fruits = ["Apple", "Banana", "Cherry",];

//   console.log(fruits);
//   console.log(fruits[0]);
//   console.log(fruits[1]);
//   console.log(fruits[2]);
//   fruits[2] = "Lemon";
//   console.log(fruits);

//   let arr = ["Apple", { name:"JOHN"}, true, () => { alert("hello from array") }];

//   console.log(arr);
//   console.log(arr[0]);
//   console.log(arr[1].name);
//   console.log(arr[2])
//   arr[3]();
// let numbers = [];
// // Push/Pop
// numbers.push(1);
// numbers.push(3);
// numbers.push(4);
// console.log(numbers);
// let removed = numbers.pop();
// // LIFO
// console.log(` removed:  ${removed}` )
// console.log(numbers);
// numbers.length = 0;
// console.log(numbers); 
// FIFO
// shift/unshift
let numbers = [];
numbers.unshift(1); 
numbers.unshift(3);
numbers.unshift(13);
numbers.unshift(15);
console.log(numbers);

removed = numbers.shift();
console.log(`removed: ${removed}`);
console.log(numbers);















let numbers = [];
numbers.push(1);
numbers.push(3);
numbers.push(4);
console.log(numbers);

let n = numbers;
console.log(n);
//    console.log(n ===numbers);
n.push(33);
 console.log(typeof n);
 console.log(typeof numbers);
 console.log(numbers);
//    let clone = Object.assign({}, numbers);
//    console.log(clone);

let clone = numbers.slice();
 clone.push(64);
 // console.log(numbers);
 clone.age = 11;
 console.log(clone["age"]);
 //numbers[index]
for( let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}

for(number of numbers){
  console.log(number)
}

console.log(numbers.toString());
console.log(numbers.join("-"))
console.log(numbers);


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matrix[1][2]);









let result = 0;
let arr = [];
function sumInput(){
   
     while(true) {
       let x = prompt("Enter ur numbers please");
        if(isNaN(x) || x == null){
        alert("its wrong") 
        break;
    }  else {
        arr.push(parseInt(x));
    }
}
 
for(let i = 0; i < arr.length; i++){
result += arr[i];
}


}
console.log(sumInput());
document.writeln(result);


// DOM
// DOM TREE
// console.log(document);
// console.log(document.documentElem ent);

//console.log(document.body);
//console.log(document.head);
// childnodes, firstChild, lastChild


