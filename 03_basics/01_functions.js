function sayMyName(){
    console.log("This is function");
    
}

// sayMyName()


function addTwoNumbers(num1,num2){
        // let result =num1+num2;
        // console.log("Aman");
        return num1+num2
} 


const result= addTwoNumbers(4,7)

// console.log("Result:",result);



function loginUserMessage(username='Asheesh'){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aman"))
// console.log(loginUserMessage())



function calculateCartprice(val1,...num1){ //... this is rest operator
    console.log(val1);
    return num1
    
}
// console.log(calculateCartprice(200,400,500));



const user={
    username:"Aman",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })


const mynewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([100,500,600]));
