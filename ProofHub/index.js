// 1. Write a program to print a series with a 'while' loop.0,1,1,2,3,5,8,13,21,..................
const num = 100;
var x=0;
var y=1;
var fn=x+y;
console.log(x);
while(fn < num){
    console.log(fn);
    fn=x+y;
    x=y;
    y=fn;
}

// 2. Write a program to get a sum of even and odd numbers between 1-100.

let sumOfEvenNos = 0;
let sumOfOddNos = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvenNos += i;
  } else {
    sumOfOddNos += i;
  }
}

console.log("Sum of even numbers between 1 to 100: " + sumOfEvenNos);
console.log("Sum of odd numbers between  1 to 100: " + sumOfOddNos);

// 3. Write a command to find if a given number is even/odd without a conditional statement?

let numb = 12; 
console.log(numb % 2 === 0 ? "Even" : "Odd");


// 4. Consider the following JSON:-
// Print user details in a list format using javascript/jquery using table tag

const employees = {
  employees: [
    {
      first_name: "Amit",
      last_name: "Sharma",
      department: "SEO",
    },
    {
      first_name: "Vineet",
      last_name: "Kumar",
      department: "Accounts",
    },
    {
      first_name: "Ajay",
      last_name: "Thakur",
      department: "QA",
    },
    {
      first_name: "Chandra",
      last_name: "Sharma",
      department: "Designer",
    },
  ],
};

let table =
  "<table><thead><tr><th>First Name</th><th>Last Name</th><th>Department</th></tr></thead><tbody>";

employees.employees.forEach((employee) => {
  table += `<tr><td>${employee.first_name}</td><td>${employee.last_name}</td><td>${employee.department}</td></tr>`;
});

table += "</tbody></table>";

document.body.innerHTML = table;


// 5. Write a program in javascript for the following:-

// a. declare array
let fruits = ["apple", "orange", "papaya", "banana"];

// b. add item
fruits.push("pineapple");
console.log(fruits);

// c. delete an item
fruits.pop();
console.log(fruits);

// d. add a particular index
fruits.splice(1, 0, "grape");
console.log(fruits);

// e. delete from a particular index
fruits.splice(2, 1);
console.log(fruits);


// 6. Write a program to find the number of times, the character "a" is repeated and its index
// position in the following paragraph:-

const paragraph =
  "JavaScript was created by Brendan Eich in 1995 to give web pages a little more pep than the <blink> tag could provide. Today it has far more powerful uses and companies like Google and Facebook use JavaScript to build complex desktop-like web applications. With the launch of Node.js, It has also become one of the most popular languages for building server-side software. Today, even the web isn’t big enough to contain JavaScript’s versatility. I believe that you are already aware of these facts and this has made you land on this JavaScript Interview Questions article.";

let count = 0;
let positions = [];

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === "a") {
    count++;
    positions.push(i);
  }
}

console.log(`The character "a" is repeated ${count} times in the paragraph.`);
console.log(`the index positions  are: ${positions.join(", ")}.`);


// 7. Write a program to print all prime numbers between 1 and 100

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
