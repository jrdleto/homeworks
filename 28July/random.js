fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then( json => console.log(json))
.catch(err => console.log(err));

async function getJson(){
    try{
     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
     let json = await response.json();
     console.log(json);
    }
    catch(err){
        console.log(err);
    }
}
getJson();


/* Async Function Syntaxes */

//Anonymous async function 

let func = (async function(){
    //code

})

//Async funct declaration 
async function myAsync(){
    //code
}

// Async function Assignment 
let myAsyncFunc = async function(){
    //code
}

// Arrow Functoin
let myAsyncFunc = async () => {
    //Code
}

// element.addEventListener('click', async function(event) {});
 
// Object & Class 