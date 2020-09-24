//queue in class using single linked list form

//add to the end
//remove from the front 

//you can't add to the front and remove from the last because it has to iterate from the first to last. 


class Node{
    constructor(value){
        this.value = value;
        this.next = null; //pointer
    }
}

class Queue {
    constructor (){
        this.first = null; 
        this.last = null;
        this.size = 0;
    }
    endQueue(val){//add at the end
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;

    }
    frontQueue(){ //remove from the front
       if(!this.first) return null;

       let temp = this.first;
       if(this.first === this.last){
           this.last = null;
       }
       this.first = this.first.next;
       this.size--;
       return temp.value;
    }
}



let q = new Queue()
q.endQueue("first") //1
q.endQueue("second")//2
q.endQueue("third")//3
q.frontQueue()//first
q.frontQueue()//second
q.frontQueue()//third
q.frontQueue()//null
