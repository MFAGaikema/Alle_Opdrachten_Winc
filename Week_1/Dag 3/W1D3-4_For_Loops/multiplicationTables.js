
for (i=0; i<=10; i++) {
    const multiplier = 9;
    let result = i * multiplier;
    console.log(i + " * " + multiplier + " = " + result);
}

for (i=0; i<=10; i++) {
    for (multiplier=0; multiplier<=10; multiplier++) {
      var result = multiplier * i;
      console.log(multiplier + " * " + i + " = " + result);
    }
  }