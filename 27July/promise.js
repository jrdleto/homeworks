function doAsync(){
    let p = new Promise(function(resolve, reject){
        console.log('in promise code');
        setTimeout(function (){
        //  console.log('resolving');
        console.log('rejecting');
        resolve();
        // reject(new Error("Smehting went wrong"));
        }, 2000)
    } );
    return p;
}

// let promise = doAsync();
// doAsync().then(function(){
//     console.log('Fullfiled');
// }, function(error){
// console.log('Rejected', error.message);
// })

doAsync().then(function(){
    console.log('Fullfiled')
    return  "continue";
})
.then((msg) => {
    console.log(msg);
    return " continue"
})
.then((msg1) =>{
    console.log(msg1);
    return "sad"
})
.then((msg2) =>{
    console.log(msg2);
    // return "sada"
})
.catch(function(error){
console.log('Rejected', error.message);
});