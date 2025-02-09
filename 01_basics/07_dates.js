//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2025,0,23) 
// console.log(myCreatedDate.toDateString());
// let myCreatedDate=new Date(2025,0,23,5,3) 
// let myCreatedDate=new Date("2025-2-5") 
let myCreatedDate=new Date("12-31-2025") 
// console.log(myCreatedDate.toLocaleString());


let newDate=new Date()
// console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long"
})