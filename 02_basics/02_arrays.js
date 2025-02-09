const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// let allheros=marvel_heros.concat(dc_heros)
// console.log(heros);

const allNewHeros=[...marvel_heros,...dc_heros] //The Spread Operator
// console.log(allNewHeros);


const another_array=[1,[2,3],[4,5,6],7,[8,9,[10,11]]]
// const real_another_array=another_array.flat(1) //Infinity
// console.log(real_another_array);


// console.log(Array.isArray("Aman"))
// console.log(Array.from("Aman")) 
// console.log(Array.from({name:"aman"}));


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
