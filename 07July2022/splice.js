// splice() is very Interesting method in array that is SPLICE().It is used to remove or add the element from 
// anywhere in the Array.It can be explained very well by taking an example like below :
// let names=['Vasanth','Kumar','Sharma','Sunil'];
// names.splice(2,1,'Singh')---->here 2 is the index of item i.e 'Sharma' and 1 is the number of item that will be removed 
// from array and 'Singh' is 1 item that will replace the item 'Sharma' at index 2.

let names=['Dhoni','Tony','Ram','Scout','Shyam'];
names.splice(0,3,'Mahendra','Singh')
console.log(names);


// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language");

alert( arr ); 

// "I", "study", "complex", "language", "JavaScript";

// from index 2
// delete 0
// then insert "complex" and "language"
