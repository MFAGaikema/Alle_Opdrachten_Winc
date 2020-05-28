//Tussen de 18 en 25

const age = 30;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}   else {
    console.log("Jammer joh, geen korting!")
}

if (age >= 18) {
    console.log("Welkom!");
}  else {
    console.log("Sorry je bent te jong.")
}

const isFemale = false;

if (isFemale === true) {
    console.log("Welkom!");
}   else {
    console.log("Wegwezen kerel!")
}

const driverStatus = "jan";
if (driverStatus === "bob") {
    console.log("Goede reis naar huis!")
}   else {
    console.log("Laten we maar even een taxi voor jou bellen.")
}

const name = "Bram";

if (name === "Bram" || name === "Sarah") {
    console.log("Hoppa! Gratis biertje!")
}   else {
    console.log("Helaas!")
}

const totalAmount = 50;

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Gratis bitterballen!")
}   else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Gratis portie nachos!")
}   else if (totalAmount >= 100) {
    console.log("Gratis flesje champagne!")
}   else {
    console.log("Helaas, moet je maar meer bestellen!")
}