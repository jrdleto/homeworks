class Set{
    constructor(){
        this.tasks = [];
        this.length = 0;
    }
 add(el){
     if(!this.tasks.includes(el)){
       this.tasks.push(el);
     }
 }
 has(el){
     return this.tasks.includes(el)
 }
 remove(el){
     this.tasks.splice(this.tasks.indexOf(el), 1)
 }
 subSet(arr){
     for(let i = 0; i < this.tasks.length; i++){
         if(!this.tasks.includes(arr.tasks[i])){
             return false;
         }
         
     }
     return true;
 }
 tanakveta(set){
     let array = [];
     for(let i = 0; i < this.tasks.length; i++){
         if(this.tasks.includes(set.tasks[i])){
             array.push.tasks[i]
         }
     }
     return array;
 }
}


let one = new Set();

one.add(3);
one.add(4);
// console.log(one.has(3))
// console.log(one.has(4));
// one.remove(3);
// console.log(one.has(3));

class anotherSet{
    constructor(){
        this.tasks = [];
        this.length = 0;
    }
 add(el){
     if(!this.tasks.includes(el)){
       this.tasks.push(el);
     }
 }
 has(el){
     return this.tasks.includes(el)
 }
 remove(el){
     this.tasks.splice(this.tasks.indexOf(el), 1)
 }
 
}

let giorgi = new anotherSet();
giorgi.add(4);
giorgi.add(5);
// console.log(giorgi.has(4));
// console.log(one.subSet(giorgi));   
console.log(one.tanakveta(giorgi)) 
// add( el ){
//     if(!this.el[1].includes(this.tasks[1])){
//         this.tasks.push(el);
//     }
// }
// has(el){
//     if(this.task[1].includes(el[1])){
//         console.log(`Yes it contains`)
//     }
// }
// remove(el){
//     this.tasks.splice(this.tasks.indexOf(el), 1);
// }