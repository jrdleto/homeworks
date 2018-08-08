// PCRE, *POSIX


// \n \t \r \v
// delimiters -> / /im
// /abc/


// ?
// *
// +    

let myStr = ` Product $13
              Product $27
              Product $112`;

let myRe = /[$0-9]+/g;
// let result = myRe.exec(myStr);
let res = myStr.replace(myRe, 'number');

console.log(res);