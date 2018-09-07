// FIFO
// class Queue {
//      constructor(){
//          this.tasks =  [];
//      }
//      enqueue( task ){
//          this.tasks.push(task);
//      }
//      dequeue(){
//          return this.tasks.shift();
//      }

//      firstElement(){
//          return this.tasks[0]
//      }
//      log(){
//          console.log(this.tasks);
//      }

//      forEach( callbackFunction){
//          for(let i = 0; i < this.tasks.length; i++){
//              callbackFunction(this.tasks[i], i, this.tasks);
//          }
//      }
// }


// let test = new PQueue();
// test.enqueue('Dato');
// test.enqueue('Giorgi');
// test.enqueue('Oto');
// test.log();
// test.forEach( (task,index,tasks) => {
//     console.log( ` ${task}, ${index}`)
// })
// console.log(test.firstElement());

class PQueue {
    constructor(){
        this.tasks =  [];
    }


    enqueue( task ){
      if( this.isEmpty()){
        this.tasks.push(task);
    }
     else{
       let inserted = false;

       for( let i = 0 ; i < this.tasks.length; i++){
           if ( task[1] < this.tasks[i][1]){
               this.tasks.splice(i, 0,task);
               inserted = true;
               break;
           }
       }

       if( !inserted ){
           this.tasks.push(task);
       }
   }
     
    }
    dequeue(){
        return this.tasks.shift();
    }

    firstElement(){
        return this.tasks[0]
    }
    log(){
        console.log(this.tasks);
    }
    isEmpty(){
        return this.tasks.length === 0;
    }

    forEach( callbackFunction){
        for(let i = 0; i < this.tasks.length; i++){
            callbackFunction(this.tasks[i], i, this.tasks);
        }
    }
    
}

// let pQueue = new PQueue();



// pQueue.add('Task3', 3);
// pQueue.has(3);
// console.log(pQueue);

// SET 
/* 
  add(el)/has(el)/remove(el)/
*/
