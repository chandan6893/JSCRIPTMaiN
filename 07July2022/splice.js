// splice() is very Interesting method in array that is SPLICE().It is used to remove or add the element from 
// anywhere in the Array.It can be explained very well by taking an example like below :
// let names=['Vasanth','Kumar','Sharma','Sunil'];
// names.splice(2,1,'Singh')---->here 2 is the index of item i.e 'Sharma' and 1 is the number of item that will be removed 
// from array and 'Singh' is 1 item that will replace the item 'Sharma' at index 2.

let names=['Dhoni','Tony','Ram','Scout','Shyam'];
names.splice(0,1,'Mahendra','Singh')
console.log(names)