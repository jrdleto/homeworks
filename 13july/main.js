String.prototype.show = function(){
    console.log(this)
}
String.prototype.repeat = function(n){
    return new Array( n + 1).join(this);
}
// "Hello World".show()

// console.log("Hey".repeat(4));

function User(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
    function something(){
        return new Date().getFullYear() - birthday.getFullYear();
    }
}

let gela = new User("Gela", new Date(1990, 2, 5));
// gela.sayName();

// Factory Class Patters

function Person(name,birthday){
    function calcAge(){
        return new Date().getFullYear() - birthday.getFullYear();
    }
    return {
        sayName(){
            console.log(`Name: ${name}, Age - ${calcAge()}`)
        }
    }
}

let gela2 = Person("Gela", new Date(1990, 2, 5));
// gela2.sayName();

function Human(name, birthday){
    this._name = name;
    this._birthday = birthday;
}


Human.prototype._calcAge = function(){
    return new Date().getFullYear() - this._birthday.getFullYear();
}

Human.prototype.sayName = function(){
    console.log(`Name: ${this._name}, Age - ${this._calcAge()}`)
}

let human = new Human("John", new Date(1996, 5, 6 ));

// human.sayName();
class Animal {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length === 0){
        console.log("Name error");
         return;
        }
        this._name = value;
    }
     
    sayName(){
        console.log(this.name);
    }
    static staticMethod(){
        console.log(this === Animal);
    }
}
// let cat = new Animal("Tom");
// cat.sayName();
// cat.name = undefined;
// cat.sayName();


function makeACLASS(sentence){
    return class{
        say(){
            console.log(sentence);
        }
    }
}

let sentence = makeACLASS("lorem ipsum dolar sit amet");


// new sentence().say();

// Animal.staticMethod()

class Article {
    constructor(title,date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
       return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("Html5", new Date(2018, 6, 13)),
    new Article("Css3", new Date(2018, 5, 13)),
    new Article("Es6", new Date(2018, 4, 13))

]

// articles.sort(Article.compare);
// console.log(articles[0].title);
// console.log(articles[1].title);

class Product {
    constructor(name, price){
        this._id = 10;
        this.name = name;
        this.price = price;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get price(){
        return this._price;
    }
    set price(value){
        this._price = value; 
    }
    makeDiscount(discount){
        return this.price - this.price*discount/12
    }
    print(){
        console.log(`Details: name is ${this.name}, price is ${this.price} `)
    }
   
     
    static compare(productA, productB){
        return productA.price - productB.price;
    }
}
let products = [
    new Product("Car", 10),
    new Product("Phone", 12),
    new Product("House", 555)
]
products.sort(Product.compare);
console.log(products.sort(Product.compare))
console.log(products[0].name);
console.log(products[0].makeDiscount(10));
console.log(products[1].makeDiscount(3));