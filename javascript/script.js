// browser file 
//because alert only works in the browser not in the node js


alert("hi")
console.log("code is running...");
console.log("code is looking like a wow...");

var a =prompt ("Wnter your number")
var istrue = confirm("is your computer blast")
if(istrue){
    console.log("your computer is blast")
}
else{
    console.log("your computer is not blast")
}

//change the body color of the page and add inline css
document.body.style.backgroundColor = "lightblue";
document.body.style.color = "red";

let username = prompt("Enter username:");
let password = prompt("Enter password:");

const correctUsername = "qazal";
const correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
  alert("✅ Login successful!");
} else {
  alert("❌ Invalid username or password.");
}