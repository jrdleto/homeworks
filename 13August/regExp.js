let regEx = new RegExp('abcd'); // new RegExp(pattern, flags);
let regEx2 = /abcd/; //pattern/flags

// test(), exec()


// let sourceStr = 'Hello RegExp Hello';
let helloRegEx = new RegExp('hello', 'gi');
// [abc]
let chSet = /[ts]ell/gi
// let example = 'sell my father this car and tell him that i lost my money'
// console.log(chSet.test(example));
// range
// {min, max} {,5}
// console.log(/[a-c]{2,}/i.test('77CC'));

// [0-9] \d
// [a-zA-Z0-9_] \w
// \D [^0-9] 
// \W [^a-zA-Z0-9_]
// console.log(/\W/.test('iasdiajoidsj77'));

// \s space, tab, newLine vericalLine ...
// . all except newLine(\n)

// \$ non whitespace

// let result = helloRegEx.test(sourceStr);
// let result2 = helloRegEx.exec(sourceStr);
// console.log(result);
// console.log(result2);
// console.log(/d*g/.test('d123213g'));

let alt = /red|green car/;

// console.log(alt.test('red car'));
// console.log(alt.test('green car'));
// console.log(alt.test('yellow car'));
let dateRegEx = /^\(\d{1,2}-){2}\d{2}(\d{2})?$/
// console.log(/^\d{10}$/.test('1234512345')); //only for 10 digits
console.log(dateRegEx.test('13-08-10'));