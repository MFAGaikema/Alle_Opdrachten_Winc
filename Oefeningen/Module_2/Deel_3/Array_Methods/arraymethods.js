//array voorbeeld
const items = [
  { name: "Bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
];

//filter() method (filtert alles zoals omschreven in de functie)
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems); //name: Bike, price: 100 etc etc etc

//map() method (laat alleen de value zien van de opgegeven property in de functie)
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames); //Bike, tv, album etc etc etc

//find() method (zoekt de property met value van de property die overeenkomt zoals in de functie)
const foundItem = items.find((item) => {
  return item.name === "book";
});
console.log(foundItem); //name: book, price: 5

//forEach() method (is een loop die alle items pakt die voldoen aan de property zoals in de functie)
items.forEach((item) => {
  console.log(item.name); //bike, tv, album etc etc
});

//some() method (zoekt of welke property dan ook voldoet aan de functie, if so: true, if not: false)
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems); //true

//every() method (checkt of alle items voldoen aan de functie)
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems);

//reduce() method (telt alles bij elkaar op)
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0); //is de startwaarde van currentTotal, dus de eerte keer heb je 0 + item.price[0], de tweede keer heb je item.price[0] + item.price[1]

console.log(total);

//includes() method (kijkt of een parameter overeenkomt met een item in de array)
const array = [1, 2, 3, 4, 5];
const includesTwo = array.includes(2);

console.log(includesTwo);
