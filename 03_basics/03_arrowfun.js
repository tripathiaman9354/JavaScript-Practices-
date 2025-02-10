const user={
    username:"Aman",
    price:199,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="Aman"
//     console.log(this.username)
// }
// chai()



// const chai=function(){
//     console.log(this);
    
// }
// chai()


// const chai=()=>{
//     console.log(this);
// }
// chai()


// const add=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add(5,6));


// const add=(num1,num2)=> num1+num2
// const add=(num1,num2)=> (num1+num2)
// const add=(num1,num2)=> ({
//     username:"Aman"
// })
// console.log(add(5,6))

