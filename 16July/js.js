class Animal {
    constructor(name){
       this.name = name;
       this.speed = 0;

    }

    run(speed = 0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
    static compare(a, b){
        return a.speed - b.speed;
    }
}

class Mouse extends Animal{
constructor(name, speed){
    super(name);    
    this.speed = speed;
}
    hide(){
        console.log(`${this.name} hides!`)
    }

    stop(){
        super.stop();
        this.hide();
    }
}

// let animal = new Animal();
let jerry = new Mouse('Jerry', 3);

jerry.run(120);
jerry.stop();


let mice =  [
 new Mouse ("big rat", 5),   
 new Mouse  ("batman", 2),
 new Mouse  ("sprinter",4),
]

mice.sort(Animal.compare);
mice[0].run();
mice[1].run();
class MyArray extends Array {
    isEmpty(){
        return this.length === 0;
    }
}

let myArr = new MyArray(1,2,3,4,5,6,7,30,20,154,33,10);

// console.log(`myArr.isEmpty() - ${myArr.isEmpty()}`);
let filteredArr = myArr.filter(item => item >= 10);

// console.table(filteredArr);
// console.log(`filteredArr.isEmpty() - ${filteredArr.isEmpty()}`);


console.log(jerry instanceof Animal);
console.log(jerry instanceof Mouse);
console.log(myArr instanceof Array);
console.log(filteredArr instanceof Array);
