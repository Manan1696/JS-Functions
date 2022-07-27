//Q1.Create one function with zero parameter having a console statement;

function one (){
    console.log("zero parameter");
}
one();


//Q2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
  
function add(a, b) {
    let sum = a + b;
    console.log(`Sum of ${a}, ${b} is ${sum} `);
  }
  add(3, 4);


//Q3.Create one arrow function

const newarrow = () => {
    console.log("Arrow function");
  };
  newarrow();


//Q4.Print output: 

var x = 21;
var girl = function() {
    console.log(x);
    var x = 20;
};
girl();


//Q5.Print output:

var x = 21;
girlOne();
console.log(x)
function girlOne() {
   console.log(x);
   var x = 20;
};


//Q6.Print output:

var x = 21;
a(); // a is not defined
b(); // b is not defined
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


//Q7.Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    let pro = 1;
    for (let i = 1; i <= n; i++) {
      pro = pro * i;
    }
    console.log(pro);
}
factorial(5);
