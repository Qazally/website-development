//node file


//JS Variables-------------------------------------------------------------------------------------------------------


//let, var , const
// console.log("hi this is a node file");
//var has global scope
//let has block (so we used mostly let)

 let a =5;
 //a=a+1;
 let b = 4;
 let c = "qazal";

//  console.log(a+b);
//  console.log(a+b+6);
//  console.log(typeof a, typeof b, typeof c);

 const d = 6;
 //d= d+1;//gives error bcz const cant be changed

 {
    //this is the block scope of a within braces
   let a= 66;
    // console.log(a) //66
 }
    // console.log(a)//5 beacuse let have block scope

    //REAP
    //read , evaluate , 


    //Primitive Datatypes:-----------------------------------------------------------------------------------------


    // 7 types(null, number, sring, boolen, symbol, undefuned,bigint)

    //object is a user defined datatype

    let x =" qazal";
    let y = 22;
    let z = 3.5;
    const p = true;
    let q = undefined;
    let r = null;
    
    // console.log(x,y,z,p,q,r);
    // console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

 //node javascript/new.js


 //Object-----------------------------------------------------------------------------------------------------------


 let o = {
    name:"Harry",
    "job role":5600 //key in double quotes bcz it has space
        }

    //i i want to add something new to object
    //we can do it by using dot notation or bracket notation
    o.salary = 100000;
    // console.log(o);

    
    
    //OPERATORES in JS---------------------------------------------------------------------------------------------



    // 1) Arthmetic Operatprs:

    let agee = 3;
    let grace= 2;
    // console.log(agee + grace);
    // console.log(agee - grace);
    // console.log(agee * grace);
    // console.log(agee / grace);
    // console.log(agee ** grace); //exponentional
    // console.log(agee % grace);//modulas
    // // ++ increment
    // // -- decrement
    //console.log(++age);
    

    // 2) Assignment Operators:
   /*
    = x=y
    += x=x+y
    -= x=x-y
    *= x=x*y
    /= x=x/y
    %= x=x%y
    +*= x=x+*y
*/
// console.log(age += grace);  // age = 5+2 = 7
// console.log(age -= grace);  // age = 7-2 = 5 again
// console.log(age *= grace);  // age = 5^2 = 10
// console.log(age /= grace);  // age = 10/2 = 5
// console.log(age %= grace);  // age = 5%2 = 1


// 3) Comparison Operators:
 /*
   == x=y equals to (= assignment operation)
  != x!=y not equal to
  === x===y strict equals to (value and type)
  !== x!==y strict not equal to
  > x>y greater than
  < x<y less than
 >= x>=y greater than or equal to
 <= x<=y less than or equal to
 ?   ternary opertaor 
  */
 
if(age!=18){
   console.log("you are 18");
}else{
   console.log("you are not 18");
}

//login validator
//works on browser

/*
let username = prompt("Enter username:");
let password = prompt("Enter password:");

const correctUsername = "qazal";
const correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
  alert("✅ Login successful!");
} else {
  alert("❌ Invalid username or password.");
}
*/

//REPL (read evaluate print loop)

// 4) Logical Operators:
/*
&& logical and (true when both conditions are true)
|| logical or (true when at least one condition is true)
! logical not (true when condition is false)
*/

/*
a=b && b=a; // true
a=b && b!=a; // false
a=b || b=a; // true
a=b || b!=a; // true
a=!b; // false
*/

//Conditional Stattements-------------------------------------------------------------------------------------------
/*
if
else if
else
switch
*/

let age = 5;

    // if(age>=18){
    //     console.log("you can drive");
        
    // }
    // else{
    //     console.log("you cannot drive");
    // }
    //console.log(age>=18?"you can drive":"you cannot drive"); // short way to write if-else in js

let score = 85;
/*
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
  */


// LOOPS-------------------------------------------------------------------------------------------------------------


// 1) For Loop
/*
for (let i = 0; i < 5; i++) {
console.log(i);
}
*/

/*
let m = 1;
for (let i = 0; i < 100; i++){
   console.log(m+i);
}
*/


// 2) For in loop
/*
let obj = {name: "John", age: 30, city: "New York"}; // object
for (let key in obj) {
console.log(key);
}
*/

// 3) For of loop
/*
for(const c of "Qazal"){
   console.log(c); // charachtors
   
}
let arr = [1, 2, 3, 4, 5]; // array
for (let value of arr) {
   console.log(value);
   }
   */


   // 4) While Loop
   /*
let i = 0;
while (i < 6) {
   console.log(i);
   i++;
   }
*/


// 5) Do While Loop
/*
let i = 0;
do {
console.log(i);
i++;
} while (i < 6);
 */

//FUNCTIONS-----------------------------------------------------------------------------------------------------------
// 1) Function declaration
/*
function greet(name) {
console.log("Hello, " + name + "!");
}
greet("John");
*/
// 2) Function expression
/*
let greet = function(name) {
console.log("Hello, " + name + "!");
}
greet("John");
*/
// 3) Arrow function
/*
let greet = (name) => {
   console.log("Hello, " + name + "!");
   }
   greet("John");
   */
  // 4) Function call
  // greet("John");
  // 5) Function return
  // function greet(name) {
  //    return "Hello, " + name + "!";
  // }
  // console.log(greet("John"));
  // 6) Function arguments
  // function greet(name, age) {
  //    console.log("Hello, " + name + "! You are " + age + "
//  ");
  // }
  // greet("John", 30);
  // 7) Function default arguments
  // function greet(name = "John", age = 30) {
  //    console.log("Hello, " + name + "! You are " + age + "
  //");
  // }
  // greet("Jane", 25);
  // 8) Function rest parameters
  // function greet(name, ...args) {
  //    console.log("Hello, " + name + "! You are " + args[0
  // }
  // greet("John", 30, 25, 20);
  // 9) Function spread operator
  // function greet(name, ...args) {
  //    console.log("Hello, " + name + "! You are " + args[0
  // }
  // let args = [30, 25, 20];
  // greet("John", ...args);
  // 10) Function bind
  // function greet(name) {
  //    console.log("Hello, " + name + "!");
  // }
  // let obj = {'
  //    name: "John"
  // }
  // greet.call(obj, "John");
  
  //function is used to use block of code rpeatedly

  function nice(name){
   console.log("hi"+ name +"you are nice");
   console.log("hi"+ name +"you are good");
   console.log("hi"+ name +"your tshirt is nice");
  }
  nice("qaz")