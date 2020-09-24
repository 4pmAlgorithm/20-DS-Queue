//QUEUE
//FIFO (First In is First Out)

//ex) waiting line at the super market.
//ex) uploading resources, printing/task processing



//****** Building a queue with an array 1 *******/

let q = [];
q.push("first")
q.push("second")
q.push("third")
//["first", "second", "third"]

q.shift()
q.shift()
q.shift()
//but this is expensive. If the array is long, all the elements has to shfit. 


//****** Building a queue with an array 2 *******/
let q = [];
q.unshift("first")
q.unshift("second")
q.unshift("third")

//["third", "second", "first"]
q.pop()
q.pop()
q.pop()
//this is better than above but writing class is better than array. 