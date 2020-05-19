const tellFortune = (numberOfChildren, partnersName, geographicLocation, jobTitle) => {
    return  "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
}
  
console.log(tellFortune(3,"Harry", "Amsterdam", "hairdresser"));
  
console.log(tellFortune(2, "Lisa", "Zwolle", "doctor"));
  
console.log(tellFortune(10, "Nico", "Den Haag", "bus driver"));