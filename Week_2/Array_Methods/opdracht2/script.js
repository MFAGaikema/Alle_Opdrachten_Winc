//A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    const findSpiderMan = superheroes.find((hero) => {
        return hero.name === "Spiderman"
    })
console.log(findSpiderMan) 

//B
const doubleArrayValues = [1, 2, 3];

const newNums = doubleArrayValues.map((num) => {
    return num + num;
})
console.log(newNums)

//C
const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
const biggerThan10 = containsNumberBiggerThan10.some((nums) => {
    return nums > 10;
}) 
console.log("does this contains a number bigger than 10?", biggerThan10)

//D
const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const italyInGreat7 = (italy) => {
    return isItalyInTheGreat7.includes("Italy")
};
console.log("is Italy in the great 7?", isItalyInTheGreat7.includes("Italy"));

//E 
const tenfold = [1, 4, 3, 6, 9, 7, 11];
const solution = tenfold.map((num) => {
    return num * 10;
});
console.log(solution);

//F
const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const below100 = isBelow100.every((num) => {
    return num < 100;
})
console.log(below100);

//G
const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const total = bigSum.reduce((currentTotal, num) => {
    return num + currentTotal;
}, 0);
console.log(total)
