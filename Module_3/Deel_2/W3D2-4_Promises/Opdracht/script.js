const getSucceedingPromise = (message, ms) => {
  const resolved = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(message);
    }, ms);
  });
  return resolved;
};

const getFailingPromise = (errorMessage, ms) => {
  const rejected = new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(errorMessage);
    }, ms);
  });
  return rejected;
};

const getRandomSucceedingOrFailingPromise = (id) => {
  // This randomly resolves to true or false
  let promiseShouldSucceed = Math.random() >= 0.5;
  // This gets some semi-random amound of seconds under the 5seconds:
  let randomMillisecond = Math.floor(Math.random() * 5000);

  if (promiseShouldSucceed) {
    return getSucceedingPromise(
      `Promise ${id} succeeded in ${randomMillisecond} ms.`,
      randomMillisecond
    );
  } else {
    return getFailingPromise(
      `Promise ${id} failed in ${randomMillisecond} ms.`,
      randomMillisecond
    );
  }
};

const createPromiseElement = (promise) => {
  const div = document.createElement("div");
  div.classList = promise.state;
  div.innerHTML = `Promise: ${promise.id}`;
  return div;
};

const showPromises = (promises) => {
  console.log("I get called every time a Promise rejects or resolves");
  const promisesDiv = document.querySelector(".promises");
  promisesDiv.innerHTML = "";
  const promisesElements = promises.map(createPromiseElement);
  promisesElements.forEach((element) => promisesDiv.appendChild(element));
};

const add50Promises = () => {
  let i = 0;
  const allPromises = [];
  // fill the allPromises array with 50 objects that will soon be Promises.
  // they all have an ID
  while (i <= 50) {
    let id = i;
    allPromises.push({
      id,
    });
    consumePromise(allPromises, id);
    i++;
  }
  // Put the inital pending Promises in the DOM:
  showPromises(allPromises);
};

const consumePromise = function (allPromises, id) {
  const promise = getRandomSucceedingOrFailingPromise(id);
  promise
  .then(resolved => {
    console.log(resolved);
    allPromises[id].state = "resolved";
    showPromises(allPromises);
  })
  .catch(rejected => {
    console.log(rejected);
    allPromises[id].state = "errored";
    showPromises(allPromises)
  })
};

const registerEventHandlers = () => {
  document.querySelector("button").addEventListener("click", add50Promises);
};

document.addEventListener("DOMContentLoaded", () => {
  registerEventHandlers();
});
