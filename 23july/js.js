let json = `{"name": "Json Guy",  "id": 667}`;

class Error{
    constructor(message){
        this.message = message;
        this.name = "error";
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
     // Your code here
    constructor(property){
        super("You haven't property : " + property );
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

function readUser(json){
    let user = JSON.parse(json);
    if( !user.age){
        throw new PropertyRequiredError("age");
    }
    if( !user.name ){
        throw new PropertyRequiredError("name");
    }
    return user;
}

try{
  let user = readUser(' {"age": 25 }')
}
catch(err){
     if( err instanceof ValidationError){
         alert("Invalid data:  " + err.message )
         alert(err.name);
         alert(err.missingProperty);
     }
     else if (err instanceof SyntaxError){
         alert("Json syntax error: " + err.message);
     }
     else{
         throw err;
     }
}

// class NewErr