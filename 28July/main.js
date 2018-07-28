function makeAPromise(time){
    return new Promise(function(resolve, reject){
        // console.log("/Start/Created Promise");
        setTimeout( () => {
         console.log('Resolving');
         if( time > 3000){
            //  console.log('Rejecting');
            //  reject(new Error(`Too long time ${time}`));
         }
         else{
            //  console.log('Resolving');
             resolve(`Ok its ${time}`);
         }
        }, time)
    });
}

let sec1 = makeAPromise(1000);
// sec1.then((result) =>{
//     console.log(result);
// })
// .catch( (error) =>{
//     console.log(error.message);
// })
let sec2 = makeAPromise(2000);
// sec2.then((result) =>{
//     console.log(result);
// })
// .catch( (error) =>{
//     console.log(error.message);
// })
let sec3 = makeAPromise(3000);
// sec3.then((result) =>{
//     console.log(result);
// })
// .catch( (error) =>{
//     console.log(error.message);
// })
let sec4 = makeAPromise(4000);
// sec4.then((result) =>{
//     console.log(result);
// })
// .catch( (error) =>{
//     console.log(error.message);
// })

// let allPromise = Promise.all([sec1, sec2, sec3]);
// allPromise
// .then((result) =>{
//     console.log(result);
// })
// .catch(error =>{
//     console.log(error)
// })

let allRace = Promise.race([sec1, sec2, sec3]);

allRace
.then(result =>{
    console.log(result);
})
.catch( error => {
    console.log(error);
})

let resolvedPromise = Promise.resolve("Resolved Promise Example"); // igive rejectzec sheidzleba daiweros   
resolvedPromise
.then(result =>{
    console.log(result);
})
.catch( error =>{
    console.log(error);
});
