const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
    
//     return acc+curval
// },0)
// console.log(myTotal);



// const myTotal=myNums.reduce((acc,curval)=>(acc+curval),0)
// console.log(myTotal);


const shoppingCart=[
    {
        itemName:"Js Course",
        price:199
    },
    {
        itemName:"Py Course",
        price:999
    },
    {
        itemName:"Mobile Dev Course",
        price:5999
    }
]


const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay);
