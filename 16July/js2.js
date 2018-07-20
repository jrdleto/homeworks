
class Product {
    constructor(id,name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    get id(){
        return this._id;
    }
    set id(value){
        this._id = value; 
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
        console.log(`Details: id is ${this.id} name is ${this.name}, price is ${this.price} `)
    }
   
     
    static compare(productA, productB){
        return productA.price - productB.price;
    }
}

class Book extends Product {
    constructor(id,name, price, author, pubDate){
        super(id, name, price);
        this.author = author;
        this.pubDate = pubDate;
    }
    print(){
        super.print();
        console.log(`${this.author} ${this.pubDate}`)
    }
    static compare(productX, productY){
        return productX.price - productY.price;
    }
    static num(productK, productN){
        return productK.pubDate - productN.pubDate;
    }

}

let books = [
    new Book(1, "book", 30, "Dorian Gray", new Date(2016,3,1).toDateString()),
    new Book(2, "book", 40, "Javascript Intro", new Date(2016,1,2).toDateString()),
    new Book(3, "book", 15, "Python Intro", new Date(2016,2,1).toDateString()),
]

// books[0].print();
// books[1].print();
// books[2].print();
books.sort(books.compare);
console.table(books.sort(Book.compare));
console.table(books.sort(Book.num));


// let products = [
//     new Product("Car", 10),
//     new Product("Phone", 12),
//     new Product("House", 555)
// ]
// products.sort(Product.compare);
// console.log(products.sort(Product.compare))
// console.log(products[0].name);
// console.log(products[0].makeDiscount(10));
// console.log(products[1].makeDiscount(3));