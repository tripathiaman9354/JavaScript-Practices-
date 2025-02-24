//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")


// console .log(map);


// for (const [key,value] of map) {
//     console.log(key, ':-',value); 
// }

for (const key in map) {
    console.log(key);   
}  


const myNumbers=[1,2,3,4,5,6,7,8,9]
// const newNum=myNumbers.map((num)=>num+10)
// console.log(newNum);

// const newNum=myNumbers
//         .map((num)=>num*10)
//         .map((num)=>num+1)
//         .filter((num)=>num>=40)
// console.log(newNum);
