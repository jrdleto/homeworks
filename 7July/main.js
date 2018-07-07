// let operator = '4';

// let num1 = 1; num2 = 3;

// switch(operator){
//     default:
//     console.log('try again');
//     case "+":
//     console.log(`num1 + num2 = ${num1 + num2}`);
//     case "-":
//     console.log(`num1 -num = ${num1 - num2}`);
//     break;
// }

//first class citizen ; Callback functions are this belowdown

// function  say(message = 'Hello', personFunc){
//    personFunc(message);
// }


// function helloJohn(message){
//    console.log(`${message}, My Name is John`)
// }

// function helloMary(message){
    // console.log(`${message}, My name is Mary`);
// }

// personFunc = helloJohn;
// say('I am from Georgia', helloJohn);


// personFunc = helloMary;
// say('I am from Usa', helloMary);
// say(undefined, helloMary);


// let User = {
//     name: 'Gela',
//     age: 13,
//     isPupil: true,
//     printInfo: function(){
//         console.log(`${this.name}, ${this.age}, ${this.isPupil}`)
//     }
// }

// function info({age, name, printInfo}){
//     console.log(`Age is ${age}, Name is ${name}`)
//     printInfo();

// }
// User.printInfo();
// info(User);

// function Person(name, lastname){
//     this.name = name;
//     this.lastname = lastname;
    
//     this.info = function(){
//         console.log(`${this.name} ${this.lastname}`)
//     }
// }
//DRY = dont repeat yourself
// let john = new Person('John', 'Smith');
// let emma = new Person('Emma', 'Watson');
// let gigola = new Person('Gigola', 'Guguli');

// john.info();
// emma.info();
// gigola.info();
// document.addEventListener("click", function add(){
        
//     let main = document.getElementById('container');
//     for(let i = 0 ; i < 9 ; i++){
//     let child = document.createElement('div');
//     child.className = "say";
//     child.classList.add(`say${i}`)
//     main.appendChild(child);
//     child.style.width = '250px';
//     child.style.height = '150px';
   
//     }

//     for(let i = 0; i < 3; i++){
//       let shvili = document.createElement('div');
//       shvili.className = 'get';
//       shvili.classList.add(`get${i}`)
//       main.appendChild(shvili)
//       shvili.style.width = '250px';
//       shvili.style.height = '150px';
//     }


// } );

// let one = document.querySelector('.say0');
// let two = document.querySelector('.say1');
// let three = document.querySelector('.say2');
// let say3 = document.querySelector('.say3');
// let say4 = document.querySelector('.say4');
// let say5 = document.querySelector('.say5');
// let say6 = document.querySelector('.say6');
// let say7 = document.querySelector('.say7');
// let say8 = document.querySelector('.say8');

// let first = document.querySelector('.get0')
// let second = document.querySelector('.get1');
// let third = document.querySelector('.get2');



// one.addEventListener('click', function() {
//     first.style.backgroundColor = 'red';
// })
// two.addEventListener('click', function() {
//     first.style.backgroundColor = 'red';
// })
// three.addEventListener('click', function() {
//     first.style.backgroundColor = 'red';
// })


//setTimeout,
// setInterval 

function printNubersTimeout(from, to){
    let current = free;
    setTimeout(function go(){
        alert(current);
        if( current < to){
            setTimeout(go, 1000)
        }
        current++;

    }, 1000)
}

printNumbersTimeout( 1,5);