//Deel A: Schrijf je eerste functie

const maakBroodje = () => {
    console.log("Pak een broodje, doe er ham op, pak het in voor de klant.");
  }
  maakBroodje();

//Deel B: Schrijf een functie met een argument
  
const makeSandWich = (topping) => { //function declaration
    console.log("There you go, your sandwich with " + topping + "!");
  }
  makeSandWich("ham"); //calling the function

//Deel C: gebruik een return statement

const calculateDiscountedPrice =  (totalAmount, discount) => {
    const price = totalAmount - discount;
    return Math.round(price);
  
  }
  console.log(calculateDiscountedPrice(44, 5.5));

//Deel D: gebruik meerdere return statements

const calculateRealDiscountedPrice = (totalAmount, discount) => {
    if (totalAmount > 25) {
    const price = totalAmount - discount;
    return Math.round(price);
    }
    return totalAmount;
  }
  console.log(calculateRealDiscountedPrice(20, 5.5));