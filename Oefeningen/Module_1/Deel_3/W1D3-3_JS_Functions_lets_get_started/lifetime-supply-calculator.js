const calculateSupply = (age, amountPerDay) => {
    const maxAge = 100;
    let totalAmount = (maxAge - age) * amountPerDay * 365;
    return "You will need " + Math.round(totalAmount) + " to last you until the ripe old age of " + maxAge + ".";
}
    
    console.log(calculateSupply(50, 11.6));
    
    console.log(calculateSupply(20, 50));
    
    console.log(calculateSupply(1.5, 23.8));