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