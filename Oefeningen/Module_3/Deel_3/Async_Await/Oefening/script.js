const makeRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`); //1
    if (location === "Google") {
      resolve("Google says hi"); //4
    } else {
      reject("We can only talk to Google"); //2
    }
  });
};

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log("Processing response"); //3
    resolve(`Extra information + ${response}`); //4 response = inhoud van de resolve van makeRequest
  });
};

// makeRequest("Google") //1 aanroepen van de functie logt als eerste
//   .then((response) => {
//     console.log("Response Received"); //2
//     return processRequest(response); //3 console.log van processRequest
//   })
//   .then((prossesedResponse) => {
//     console.log(prossesedResponse); //4 resolve van processRequest
//   })
//   .catch((err) => {
//     console.log(err); //2 reject van makeRequest
//   });

const aSyncFunction = async () => {
  try {
    const response = await makeRequest("Facebook");
    console.log("Response Received");
    const prossesedResponse = await processRequest(response);
    console.log(prossesedResponse);
  } catch (err) {
    console.log(err);
  }
};
//zonder await returnt hij alleen de promise, maar niet de inhoud ervan
aSyncFunction();
