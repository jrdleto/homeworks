function LinkedList(){
    let head = null;
    let length = 0;
    let Node = function(value){
        this.value = value;
        this.next = null;
    }

    this.length = () => length;
    this.head = () => head;

    this.add = (value) =>{
        let node  = new Node(value);
        if( head === null) {
            head = node;
        }
        else {
            let current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
    }
     // Node Remove 
    this.remove = (value) => {
        let current = head;
        let prevNode;
        if(current.value === value){
            head = current.next
        }
        else{
            while( current.value !== value){
                prevNode = current;
                current = current.next
            }
            prevNode.next = current.next
        }
        length --;
    }
    this.isEmpty = () =>{
        return length === 0;
        // return head === null;
    }

    this.indexOf = (value) => {
        let current = head;
        let index = -1;

        while( current ) {
            index++;
            if( current.value === value){
                return index;
            }
            current = current.next;
        }

        return -1;
    }

    this.nodeAt = (index) =>{
        let current = head;
        let number = 0;
        while( current ) {
            if( number === index){
                return current;
            }
            current = current.next;
            number++      
        }
        return -1;
    }
    // return value by the index
    this.valueAt = (index) => {
        
        let current = head;
        let number = 0;
        while( current ) {
            
          if( number === index){
              return current.value;
          }
          current = current.next;
          number++;
        }
        
       return -1;
    }


    // add new value
    this.insertAt = (index, value) =>{
        
    let number = this.nodeAt(index-1);
    let curr = this.nodeAt(index);
    let node = new Node(value);
    number.next = node;
    node.next = curr;
    length ++;
    //   let current = head;
    //   this.value = value;
    //   let number = 0 ;
    //   while ( current ) {
    //       if( number === index){
    //           return current.value = this.value;
    //       }
    //       current = current.next;
    //       number++;
    //   }
    //   return -1;

    // }

    }

    this.removeAt = (index) =>{
        let first = this.nodeAt(index-1);
        let second = this.nodeAt(index+1);
        first.next = second;
        length--;

    }

}

let list = new LinkedList();
list.add(1);
list.add(13);
list.add(16);
list.add(29);
list.add(33);
console.log(list.length());
console.log(list.head().value)
console.log(list.head().next.value);
// list.remove(1);
console.log(list.indexOf(29));

// console.log(list.valueAt(2));
list.insertAt(2, 5)
console.log(list.valueAt(2));
console.log(list.valueAt(3));
console.log(` length - ${list.length()}`)
list.insertAt(2, 3);
console.log(` length is ${list.length()}`)
console.log(list.valueAt(2));
console.log(list.valueAt(3));
console.log(list.valueAt(4));
// console.log(list.valueAt(2))
// console.log(list.valueAt(2));
// console.log(list.valueAt(3))
// console.log(list.valueAt(1));
// console.log(list.valueAt(2))
// console.log(list.valueAt(0));
// console.log(list.valueAt(1));
list.removeAt(2);
console.log(list.valueAt(2));
console.log(` length is ${list.length()}`)
