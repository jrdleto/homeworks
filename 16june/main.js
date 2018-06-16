//#region

// let num = prompt("enterr nnumber");
// if (num % 2 == 0) {
//     alert("even");
    
// }
//  else {
//     alert("odd");
// }

/* if(piroba){
    //moqmedeba
}
*/
//#endregion
//#region wrong
// let x;
// if ( x = 5 ) {
//     alert("false");
// }
//#endregion wrong
//#region ternary
// let accesAllowed;
// let age = prompt("age");
// if ( age > 18 ) {
//     accesAllowed = true;
// }
// else {
//     accesAllowed = false;
// }
// alert(accesAllowed);

// // let result = condition ? value_1 : value_2;

// accesAllowed = ( age > 18 ) ? true : false;
// accesAllowed = age > 18;


//#endregion ternary
//#region logical or
let hour = 10;
if ( hour < 10 || hour > 18) {
    alert("Is closed");
}
//true || false 

if ( 1 || 0){
    alert("truthy");
}
alert(true || "the string");
alert(null || 1);
//#endregion logical

//#region logical AND 
let hour = 11;
let minute = 44;

if (hour == 11 && minute == 44){
    alert("Time is 11:44");
}
if ( 1 && 0 ) {
    alert("Wont work");
}

alert(1 && 0 );
alert(1 && 5);
alert( null && 5);
alert(null && "string");
alert( 5 || 7 && 0);
alert(0 && 10);
alert(5 && 4);
//#endregion logical AND

//#region logical NOT
alert("true");
alert(!0);
//#endregion logical NOT

//#region switch

   let a = 4 ;

   switch(a){
    case 3 :
    alert("a = 3");

    case 4 :
    alert("a = 4");
    
    case 5 :
    alert(" a = 5 ");

    default:
    alert("ddefault");
    break;
   }
   
//#endregion switch 

//#region while 


// while(condition){
// }


let i = 0;
while ( i < 10) {
    document.writeln(i);
    i++;
}
document.write('</br>');
while ( i ) {
    document.writeln(i);
    i--;
}
while ( i < 3 ) {
    alert(i++);
}



//#endregion while
//#region do_while
let i = 0 ;

do {
     alert(i);
      i++;
} while(i < 4);

let number = prompt("enter number");

do {
if(isNaN(number)) {
    alert("error message");
}
}
 while (number === !true);

 let num = Number(prompt("Write number"));
let result = 0;
while(num != 0){
    result= result + num%10;
    num= (num - num%10)/10; 
} 
alert(result);   
//#endregion do_while
//#region for
//  for(begin; condition; step)

for(let i = 0; i < 10; i++){
    if(i == 5) continue;
    alert(i);

 }
//#endregion for



