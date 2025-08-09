//node file

//JS Variables

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

    //primitive datatypes:
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

 //Object

 let o = {
    name:"Harry",
    "job role":5600 //key in double quotes bcz it has space
        }

    //i i want to add something new to object
    //we can do it by using dot notation or bracket notation
    o.salary = 100000;
    // console.log(o);

    
    //IF-else:

    let age = 5;

    // if(age>=18){
    //     console.log("you can drive");
        
    // }
    // else{
    //     console.log("you cannot drive");
    // }
    //console.log(age>=18?"you can drive":"you cannot drive"); // short way to write if-else in js


    //OPERATORES in JS:
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


//Comparison Operators:
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
let username = prompt("Enter username:");
let password = prompt("Enter password:");

const correctUsername = "qazal";
const correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
  alert("✅ Login successful!");
} else {
  alert("❌ Invalid username or password.");
}
