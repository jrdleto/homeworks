let box = document.querySelector('.box');
box.style.backgroundColor = 'red' ;



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

function checkMovie(age){
    if(age < 18) return;
    alert('acces granted!...')                                                                                                                                                                                                               
}
checkMovie(17);
function nothing(){
    //Empty
}

console.log(nothing() === undefined);

