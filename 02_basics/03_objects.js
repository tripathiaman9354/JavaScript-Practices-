// singleton
// Object.create

// object literals

const mySym=Symbol("key1")
const JsUser={
    fname:"aman",
    "lname":"tripathi",
    [mySym]:"Mykey1",
    age:"23",
    class:"MCA",
    location:"Delhi",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

 JsUser.fname="Asheesh"

//  console.log(JsUser.fname) 
//  console.log(JsUser['lname'])
//  console.log(JsUser[mySym])
 
// Object.freeze(JsUser)
// JsUser.fname="Ashutosh"
// console.log(JsUser);

 
JsUser.greeting=function(){
    console.log("Hello js User");   
}

JsUser.greeting2=function(){
    console.log(`Hello js User,${this.fname}`);   
}
 

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
