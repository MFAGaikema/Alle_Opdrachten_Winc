//functie 1
const adding1 = (...nums) => {
  return nums.reduce((firstVal, newVal) => {
    return firstVal + newVal;
  });
};
console.log(adding1(4, 10, 20, 7098, 6));

//functie 2
const adding2 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const array = [1, 2, 3];

console.log(adding2(...array));
