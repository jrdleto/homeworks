let a = document.querySelector('a');

console.log(a.constructor.name);

console.log(a.tagName);

let textarea = document.createElement("textarea");
// data
document.body.appendChild(textarea);

let br = document.createElement('br');

document.body.insertBefore(br, textarea);

let atts = Array.from(a.attributes);

atts.forEach((attr) => {
    console.log(`${attr.nodeName}=${attr.nodeValue}`)
})
textarea.setAttribute("rows", 10);
textarea.setAttribute('cols', 25);
// textarea.style.resize = "none";
//display: block | none;
// .hide 
// console.log(textarea.getAttribute('style'));

// className, classList
// console.log(a.className);

// a.className += ' a.style';
// console.log(a.classList);

// a.classList.add('a-style');
// console.log(a.classList.contains('a-style'));
// a.dataset.count  = 0;
// a.addEventListener('click', (event) =>{
//     let count = parseInt(event.target.dataset.count);
//     if(count < 4){
//         event.preventDefault();
//         event.target.dataset.count = count + 1;
//     }
//     a.classList.toggle('a-style');  
// } )

// let input = document.querySelector("#name");
// console.log(input.value);
// input.value = "";

// let object = { name: "Oho Name", age: 80};
// let david = {name: "david", age: 23};


// // let {name, age} = david;


// let {name:x, age:y} = object;
// console.log(x,y);

let deepObject = {
    innerObject: {
        deep: "deep property",
        wow: true,
    }
}

let {innerObject:  {deep:myDeep, wow:myWow  } } = deepObject;
console.log(myDeep,myWow);

function greet({age, name:greeting="Person"}){
    console.log(`${greeting} is ${age} years old`)
}

greet({name:"John", age: 22});
greet({age:22});


function getCoonds(){
    return{
        x: 43,
        y: 41,
    }
}

let {x, y} = getCoonds();

console.log(x,y);