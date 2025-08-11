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


//STRINGS---------------------------------------------------------------------------------------------------------------


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
 

//upper case and lower case
console.log(real_name.toUpperCase());//QAZAL
console.log(real_name.toLowerCase());//qazal

// //length
console.log(real_name.length); //5

// //slice()
console.log(real_name.slice(1, 3)); //az (1 included, 3 not included)
console.log(real_name.slice(1)); //azal (starting from 1 to the end of the string )

// //replace()
console.log(real_name.replace("al", "334")); //Qazal

// //concat()
console.log(real_name.concat(" ", friend)); //qazal zahra
console.log(real_name.concat(" ", friend, " ayesha")); //qazal zahra ayesha

//trim
let b="   Ayesha     "
console.log(b.trim()); //Ayesha (removes whitespaces)

//charAt(index)
console.log(real_name.charAt(0)); //q
//charCodeAt(index)
console.log(real_name.charCodeAt(0)); //113 

//indexOf()
console.log(real_name.indexOf("a")); //1
//lastIndexOf()
console.log(real_name.lastIndexOf("a")); //3
//localeCompare()
console.log(real_name.localeCompare("qazal")); //0
//match()
console.log(real_name.match(/a/)); //["a", index: 2, input:
//search()
console.log(real_name.search(/a/)); //1


