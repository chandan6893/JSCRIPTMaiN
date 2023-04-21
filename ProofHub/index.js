// 1. Write a program to print a series with a 'while' loop.0,1,1,2,3,5,8,13,21,..................
// const num = 100;
// var x=0;
// var y=1;
// var fn=x+y;
// console.log(x);
// while(fn < num){
//     console.log(fn);
//     fn=x+y;
//     x=y;
//     y=fn;
// }

// 2. Write a program to get a sum of even and odd numbers between 1-100.

// let sumOfEvenNos = 0;
// let sumOfOddNos = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumOfEvenNos += i;
//   } else {
//     sumOfOddNos += i;
//   }
// }

// console.log("Sum of even numbers between 1 to 100: " + sumOfEvenNos);
// console.log("Sum of odd numbers between  1 to 100: " + sumOfOddNos);

// 3. Write a command to find if a given number is even/odd without a conditional statement?

// let numb = 12; 
// console.log(numb % 2 === 0 ? "Even" : "Odd");


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
