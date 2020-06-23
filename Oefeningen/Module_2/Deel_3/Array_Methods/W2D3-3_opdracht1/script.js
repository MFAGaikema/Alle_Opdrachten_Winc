//A
const cool = ["hoi", "ik", "ben"]
cool.push("cool");
console.log(cool)

//B
const amountOfElementsInArray = ["appels", "peren", "citroenen"]
console.log(amountOfElementsInArray.length)

//C
const array = ["Belgie", "Nederland", "Luxemburg"];
console.log(array[0])
console.log(array.slice(0,1))
// console.log(array.splice(0,1))
console.log(array)

//D
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
console.log(lastElementInArray[3]);
console.log(lastElementInArray.slice(3,4));
console.log(lastElementInArray.splice(3,4))
console.log(lastElementInArray.pop());

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

console.log(presidents.slice(0,1));
console.log(presidents.splice(0,1));

//F
const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

console.log(stringsTogether.join(" "));

//G
const combineArrays = [[1,2,3], [4,5,6]] 
console.log(combineArrays.flat())
