//While loop old school
const array = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

//For loop old school
for (i=0; i<array.length; i++) {
    console.log(array[i]);
}

//ForEach new school

array.forEach(color => console.log(color));

/*
1. Hoeveel regels neemt mijn for loop in beslag? 
2

2. Hoeveel regels neemt mijn `forEach` method in beslag? 
1

3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Als je gewoon alle properties van een array moet loggen is dit wel ideaal en zijn de andere methoden vrij omslachtig.
De forEach loop zegt precies wat hij doet.

4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en 
zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). 
Ben je nu aan het *itereren*?
Ja, je herhaalt de stappen voor elke property.*/

const obj = {
    name: "Harry",
    age: 20,
    married: true,
    residence: "Zwolle",
    pets: 2
  }
Object.entries(obj).forEach(([key, value]) => console.log(key, value));



