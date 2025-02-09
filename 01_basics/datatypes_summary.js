// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.18

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 35468787832312684n

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof isLoggedIn);
// console.log(typeof scoreValue);


//Reference  (Non Primitive)

//Array, Objects, Functions


const heros = ["aman","jatin","lalBahadurShashtri"];

let myObj={
    name: "aman",
    city: "Bahraich",
}
    
const myFunction=function(){
    console.log("Hello World");
    // return 7;   
}

// myFunction()
// console.log(myFunction());

// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof anotherId);


/********************Memory In Js**********************/

//Stack (Primitive), Heap (Non-Premitive)

let Name = "Aman"
let nickName = Name;
nickName="Krishna"

// console.log(nickName);
// console.log(Name);



let User1= {
    email: "aman@gmail.com",
    upi: "userr@ybl"   
}  

let User2=User1

User2.email= "aman1221@gmail.com"

console.log(User1.email);
console.log(User2.email);
