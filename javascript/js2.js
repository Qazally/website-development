//FUNCTIONS-------------------------------------------------------------------------------------------------------------


function nice(name){
  //  console.log("hi "+ name +" you are nice");
  //  console.log("hi "+ name +" you are good");
  //  console.log("hi "+ name +" your tshirt is nice");
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

  // console.log("The sum of these numbers is : ", result1);
  // console.log("The sum of these numbers is : ", result2);
  // console.log("The sum of these numbers is : ", result3);
//   console.log("The sum of these numbers is : ", result);

// Arrow Function

  const func1 = (x)=>{
    // console.log("I am an arrow function", x);
    
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
//  console.log(a);
//  console.log(a[0]);//q
//  console.log(a[1]);//a
//  console.log(a[2]);//z
//  console.log(a[3]);//a
//  console.log(a[4]);//l
//  console.log(a[5]);//undefined
//  console.log(a.length); //5

 let real_name="qazal";
 let friend="zahra";
//  console.log("Her name is "+real_name+"her friend name is "+friend); //Her name is qazal her friend is zahra

 //Template literal
 //  allows you to embed variables and expressions inside a string using ${...}.

//  console.log(`Her name is ${real_name} her friend name is ${friend}`); //Her name is qazal her friend is zahra

 //Escape sequence character

// console.log("Line1\nLine2");
// console.log("Tab\tSpace");
// console.log("She said: \"You're awesome!\"");
// console.log("Path: C:\\Users\\Qazal");

//String properties or methods:
 

//upper case and lower case
// console.log(real_name.toUpperCase());//QAZAL
// console.log(real_name.toLowerCase());//qazal

// // //length
// console.log(real_name.length); //5

// // //slice()
// console.log(real_name.slice(1, 3)); //az (1 included, 3 not included)
// console.log(real_name.slice(1)); //azal (starting from 1 to the end of the string )

// // //replace()
// console.log(real_name.replace("al", "334")); //Qazal

// // //concat()
// console.log(real_name.concat(" ", friend)); //qazal zahra
// console.log(real_name.concat(" ", friend, " ayesha")); //qazal zahra ayesha

// //trim
// let b="   Ayesha     "
// console.log(b.trim()); //Ayesha (removes whitespaces)

// //charAt(index)
// console.log(real_name.charAt(0)); //q
// //charCodeAt(index)
// console.log(real_name.charCodeAt(0)); //113 

// //indexOf()
// console.log(real_name.indexOf("a")); //1
// //lastIndexOf()
// console.log(real_name.lastIndexOf("a")); //3
// //localeCompare()
// console.log(real_name.localeCompare("qazal")); //0
// //match()
// console.log(real_name.match(/a/)); //["a", index: 2, input:
// //search()
// console.log(real_name.search(/a/)); //1


/*
create a business name generator by combinig list of adjectives, shop name and another name
Adjedtives :
crazy
amazing 
fire

shop name:
engine 
foods
garkments

anoter word
bross
limited
hub

without using arrays4
*/


/*
let random = Math.random();
let adjective = "crazy";
if (random < 0.33) {
  adjective = "amazing";
  } else if (random < 0.66) {
    adjective = "fire";
  }
    let shop_name = "engine";
  if (random < 0.33) {
      shop_name = "foods";
  } else if (random < 0.66) {
    shop_name = "garkments";
  }
   let another_name = "bross";
   if (random < 0.33) {
    another_name = "limited";
   } else if (random < 0.66) {
   another_name = "hub";
   }
   console.log(adjective + " " + shop_name + " " + another_name);
   //output: crazy engine bross
   //output: amazing foods limited
    */


  //ARRAYS-------------------------------------------------------------------------------------------------------------


  let arr = [1,2,4,5,7]
  console.log(arr,typeof arr);//typeof array is object
  console.log(arr.length); //obtaining length of array //5
//Arrays are mutable by default .you can change them
console.log(arr[0]);//1
arr[0] = 10;// value at index 0 is changed to 10 bcz arrays are mutable
console.log(arr[0]);//10

//Methods of arrays

//1.shifting array into string
console.log(arr.toString()); //10,2,3,5,7

//2.join() method
console.log(arr.join(" and ")); //10 and2 and 3 and 5 and 7

//3.pop() method
//removes element from the end of array
arr.pop();
console.log(arr);//[10, 2, 4, 5]
console.log(arr.length);//4

let fruits = ["apple", "banana", "cherry"];
let last = fruits.pop();
console.log(last);   // "cherry"
console.log(fruits); // ["apple", "banana"]

//4.push() method
//adds element at the end of array
arr.push(20);
console.log(arr);//[10, 2, 4, 5, 20]
console.log(arr.length);//5

//5.shift() method
//removes element from the beginning of array
arr.shift();
console.log(arr);//[ 2, 4, 5, 20]
console.log(arr.length);//4

//6.unshift() method
//adds element at the beginning of array
arr.unshift("qaz");
console.log(arr);//[qaz, 2, 4, 5,20]
console.log(arr.length);//5

//7.delete()
//removes element at specified index
delete arr[4]
console.log(arr);//[ 'qaz', 2, 4, 5, empty item ]
console.log(arr.length);//5
console.log(arr[4]);//undefined...it occupies space in memory but has no value

//8.concat() method
//concatenates two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr.concat(arr1,arr2)); //[ 'qaz', 2, 4, 5, empty, 1, 2, 3, 4, 5, 6 ]
//it does not chnge the original array .. it makes new array
console.log(arr);//[ 'qaz', 2, 4, 5, <1 empty item> ]
console.log(arr.length);//5

//sort()method

let numbers = [4, 2, 9, 1];
numbers.sort();
console.log(numbers); // [1, 2, 4, 9]



//5.splice() method
//removes elements from array and adds new elements
arr.splice(2,1,3);
console.log(arr);//[1, 2, 3, 5, 7
console.log(arr.length);//5
//6.indexOf() method
//returns index of first occurrence of element in array
arr.indexOf(5);
//returns 3
//7.lastIndexOf() method
//returns index of last occurrence of element in array
arr.lastIndexOf(5);
//returns 3
//8.slice() method
//returns new array with elements from start to end index
arr.slice(1,3);
//returns [2, 3]
//9.concat() method
//returns new array with elements from array1 and array2

  
