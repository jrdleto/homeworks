function hello(event){
 console.log('Attr handler', event);
}
function hello2(num){
    console.log("i am hello2", num);
}
let prop_handler = document.getElementById('prop_handler');
prop_handler.onclick = function(){
    console.log("Prop handler", this, event);

    Prop2.call(this,event);
}
function Prop2(event){
    console.log('Prop Handler 2', this, event);
}

let listener = document.getElementById('listener');
listener.addEventListener('click', function(event){
    // event.stopImmediatePropagation();
    event.stopPropagation();
    console.log('AddEvenetListener');
  
})

// window.addEventListener('click', (event) =>{
//     console.log(1);
// },true)

// document.addEventListener('click', (event) =>{
//     console.log(2);
// },true)

// document.documentElement.addEventListener('click', (event) =>{
//     console.log(3);
// },true)

// document.body.addEventListener('click', (event) =>{
//     console.log(4);
// },true)

// document.querySelector('#listener').addEventListener('click', (event) =>{
//     console.log(5);
// },true)

document.querySelector('#listener').addEventListener('click', function namedCB(event){
    console.log('NamedCB');
    console.log(event.currentTarget, event.targetl, event.eventPhase);

    event.stopPropagation();
    // event.target.removeEventListener('click', namedCB);
},false);
 
let arrowFunction = document.getElementById('arrowFunction');
arrowFunction.addEventListener('click', (event) => {
   console.log('ArrowFunction', this)
})

document.querySelector('a').addEventListener('click', (event) => {
     event.preventDefault();
})
document.body.addEventListener('click', (event) =>{
    console.log(event.currentTarget, event.targetl, event.eventPhase);
},false);

document.documentElement.addEventListener('click', (event) =>{
    console.log(event.currentTarget, event.targetl, event.eventPhase);
},false)

document.addEventListener('click', (event) =>{
    console.log(event.currentTarget, event.target, event.eventPhase);
},false)

window.addEventListener('click', (event) =>{
    console.log(event.currentTarget, event.target, event.eventPhase);
},false)

