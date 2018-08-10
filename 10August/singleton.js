class DataBase {
    constructor(dbName){
        if(DataBase.exists){
            return DataBase.instance;
        }
        this._dbName = dbName;
        DataBase.instance = this;
        DataBase.exists = true;

        return this;
    }
    getData(){
        return this._dbName;
    }
    setData(value){
        this._dbName = value;
    }
}

const mysql = new DataBase('MySQL');
console.log(mysql.getData());
// console.log(DataBase.exists);

const mongoDb = new DataBase('MongoDB');
console.log(mongoDb.getData());

// factor, prototype, constructor, pattern(funqcia rogorc konstruktori (function new)), Module pattern, Module revealing pattern,singleton
//observer,decorator facade, maven pattern
 