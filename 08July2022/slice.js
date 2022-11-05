let names=['Dhoni','Tony','Ram','Scout','Shyam'];


 console.log(names.slice(1,3));
 console.log(names.slice(1));
console.log(names.slice(1,-1));

console.log(names.slice(-5,-2));
console.log(names.slice(-2));

// slice:-
// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:

arr.slice([start], [end]);

// It returns a new array copying to it all items from index start to end (not including end). 
// Both start and end can be negative, in that case position from array end is assumed.
