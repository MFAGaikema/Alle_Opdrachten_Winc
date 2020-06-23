//functie toevoegen elementen
const addList = (input) => {
  const parentOfLi = document.querySelector("ul");
  const li = document.createElement("li");
  parentOfLi.appendChild(li);
  li.innerHTML = input;
};

//leegmaken veld
const empty = () => {
  document.querySelector("ul").innerHTML = "";
};

// landen
const countries = randomPersonData.map((countries) => {
  return countries.region;
});

const landenBtn = document.querySelector("#countries");

const allCountriesInput = countries.sort();
const singleCountries = [...new Set(allCountriesInput)];

const countryList = () => {
  empty();
  singleCountries.forEach((country) => {
    addList(country);
  });
};
landenBtn.addEventListener("click", countryList);

//steenbok vrouwen
const steenbokVrouwen = randomPersonData.filter((women) => {
  const dateArray = women.birthday.dmy.split("/"); // 'dd' 'mm' 'yyyy'
  const steenbok =
    (dateArray[1] == 12 && dateArray[0] > 22) ||
    (dateArray[1] == 1 && dateArray[0] < 19); // [0] = 'dd', [1] = 'mm', [2] = 'yyyy'
  return women.gender == "female" && women.age > 30 && steenbok; //returnt alle objecten die voldoen aan deze eisen
});

const vrouwenBtn = document.querySelector("#steenbok");

const vrouwenLijst = () => {
  empty();
  const sortedLadies = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  steenbokVrouwen.sort(sortedLadies);

  steenbokVrouwen.forEach((vrouwen) => {
    addList(`${vrouwen.name}, ${vrouwen.surname}, ${vrouwen.photo}`);
  });
};

vrouwenBtn.addEventListener("click", vrouwenLijst);

//creditcards
const creditcardBtn = document.querySelector("#creditcards");
let todayArray = new Date().toLocaleDateString();
let todayDash = todayArray.split("-");
let todayYear = parseInt(todayDash[2], 10);
let nextYearTwoNums = todayYear - 2000 + 1;

const exDate = randomPersonData.filter((data) => {
  const date = data.credit_card.expiration;
  return date.split("/")[1] <= nextYearTwoNums && data.age >= 18;
});
// console.log(exDate);

const cardList = () => {
  empty();
  exDate.sort((a, b) => {
    return (
      a.credit_card.expiration.split("/")[0] -
      b.credit_card.expiration.split("/")[0]
    );
  });

  exDate.forEach((cards) => {
    addList(
      `Name = ${cards.name} ${cards.surname}, phonenumber = ${cards.phone}, creditcard number = ${cards.credit_card.number}, exp date = ${cards.credit_card.expiration}`
    );
  });
};
creditcardBtn.addEventListener("click", cardList);

//Meeste mensen

const mostPeopleBtn = document.querySelector("#mostpeople");

const count = countries.reduce((map, val) => {
  map[val] = (map[val] || 0) + 1;
  return map;
}, {});

const sortedCounts = Object.entries(count);

sortedCounts.sort((a, b) => {
  return b[1] - a[1];
});

//   console.log(sortedCounts)
const mostPeopleList = () => {
  empty();
  sortedCounts.forEach((countries) => {
    addList(`${countries}`);
  });
};

mostPeopleBtn.addEventListener("click", mostPeopleList);

//Gemiddelde leeftijd

const listCountriesBtn = document.querySelector("#age");

const addListCountries = () => {
  empty();

  singleCountries.forEach((country) => {
    const parentOfLi = document.querySelector("ul");
    const li = document.createElement("li");
    parentOfLi.appendChild(li);
    const button = document.createElement("button");
    li.appendChild(button);
    button.classList.add("countrybtns");
    button.innerHTML = country;

    const countryBtns = document.querySelectorAll(".countrybtns");

    countryBtns.forEach((btn) => {
      const addText = () => {
        const filteredPeople = randomPersonData.filter((people) => {
          return people.region == country;
        });
        const ageFiltered = filteredPeople.map((age) => {
          return age.age;
        });
        const average = (ageFiltered) => {
          const total = ageFiltered.reduce((start, age) => start + age, 0);
          return total / ageFiltered.length;
        };

        const averageAge = average(ageFiltered);
        const averageRoundAge = Math.round(averageAge);
        //   console.log(averageRoundAge);
        if (document.querySelector("p") === null) {
          const p = document.createElement("p");
          li.appendChild(p);
          p.innerHTML = `The average age in ${country} is ${averageRoundAge}.`;
        }
      };
      btn.addEventListener("click", addText);
    });
  });
};
// addListCountries()
listCountriesBtn.addEventListener("click", addListCountries);

//ik kreeg het niet voor elkaar om de tekst naast de nieuwe buttons aan en uit te zetten.
