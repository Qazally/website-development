//node file

//JS Variables

//let, var , const
console.log("hi this is a node file");
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

//  node javascript/new.js

 //Object

 let o = {
    name:"Harry",
    "job role":5600 //key in double quotes bcz it has space
        }

    //i i want to add something new to object
    //we can do it by using dot notation or bracket notation
    o.salary = 100000;
 console.log(o);
 