//array voorbeeld 
const items = [
    {name: "Bike", price: 100},
    {name: "tv", price: 200},
    {name: "album", price: 10},
    {name: "book", price: 5},
    {name: "phone", price: 500},
    {name: "computer", price: 1000},
    {name: "keyboard", price: 25}
];
//MAP
// const itemNames = items.map((item) => {
//     return item.name;
// });
const itemNames = items.map(item => item.name);

console.log(itemNames) //Bike, tv, album etc etc etc

//FILTER
// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
//   });

const filteredItems = items.filter(item => item.price <=100); //met 1 parameter hoeven er geen haakjes bij

console.log(filteredItems); //name: Bike, price: 100 etc etc etc

//REDUCE
// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal;
// }, 0)//is de startwaarde van currentTotal, dus de eerte keer heb je 0 + item.price[0], de tweede keer heb je item.price[0] + item.price[1]

const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0)

console.log(total)

