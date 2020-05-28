let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve("succes")
  } else {
    reject("failed")
  }
}) 

p.then((message) => {
  console.log("this is in the then " + message)
}).catch((message) => {
  console.log("this is in the catch " + message)
})



const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);


// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then((resolved) => {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch((error) => {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();
