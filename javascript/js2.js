//FUNCTIONS-------------------------------------------------------------------------------------------------------------


function nice(name){
   console.log("hi "+ name +" you are nice");
   console.log("hi "+ name +" you are good");
   console.log("hi "+ name +" your tshirt is nice");
  }
  nice("qaz")
  nice("zahra")

  function sum(a,b,c=4){
    // console.log(a+b);
    return a+b+c; // to return the vallue also add
    
  }
  result1 = sum(4,2)
  result2 = sum(4,88)
  result3 = sum(15,3,1)

  console.log("The sum of these numbers is : ", result1);
  console.log("The sum of these numbers is : ", result2);
  console.log("The sum of these numbers is : ", result3);
//   console.log("The sum of these numbers is : ", result);

// Arrow Function

  const func1 = (x)=>{
    console.log("I am an arrow function", x);
    
  }
  func1(5);
  func1(10);
  func1(15);

  /*
  make a faulty calculatore that does:
  1. it takes input of two numbers and an operator from user
  2. it performs the operation as follows:

  +.....>-
  *.....>+
  -.....>/
  /.....>**

  it performs the operation 10% of times wrong
  */

  //solution
/*
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let operator = prompt("Enter operator");
let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // performs correct calculations
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
} else {
  // performs wrong calculations
  operator = obj[operator];
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}
*/


//STRINGS-------------------------------------------------------------------------------------------------------------
 //returning charachters of string

 let a = "Qazal";
 console.log(a);
 console.log(a[0]);
 console.log(a[1]);
 console.log(a[2]);
 console.log(a[3]);
 console.log(a[4]);
 console.log(a[5]);//undefined
 console.log(a.length); //5

 let real_name="qazal";
 let friend="zahra";
 console.log("Her name is "+real_name+"her friend name is "+friend); //Her name is qazal her friend is zahra

 //Template literal
 //  allows you to embed variables and expressions inside a string using ${...}.

 console.log(`Her name is ${real_name} her friend name is ${friend}`); //Her name is qazal her friend is zahra

 //Escape sequence character

 console.log("Line1\nLine2");
console.log("Tab\tSpace");
console.log("She said: \"You're awesome!\"");
console.log("Path: C:\\Users\\Qazal");

//String properties or methods: