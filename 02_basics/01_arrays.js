const myArr=[1,2,3,4,5]
const myHeros=["Aman"]

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(3));
 
// const newArr=myArr.join() 
// console.log(typeof(newArr));

// console.log(myArr);


//slice, splice
console.log("A",myArr );

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

