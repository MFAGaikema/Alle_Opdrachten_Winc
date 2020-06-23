const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]

//1 Namen alle superhelden
const names = superheroes.map(nameHero => nameHero.name);
console.log(names);

//2 Alle lichte superhelden < 190
const lightHeroes = superheroes.filter(lightHero => lightHero.weight < 190);
console.log(lightHeroes);

//3 De namen van de helden die 200 wegen
const heroesWhoWeigh200 = superheroes.filter(heroes200 => {
    return heroes200.weight == 200}).map(name200 => {
        return name200.name});
console.log(heroesWhoWeigh200);

//4 First appearanche superheroes
const appearanche = superheroes.map(appearancheHero => appearancheHero.first_appearance + appearancheHero.name);
console.log(appearanche);

//5 DC comics heroes
const dcHeroes = superheroes.filter(dcComics => {
    return dcComics.publisher == "DC Comics"}).map(dcHero => {
        return dcHero.name});
console.log(dcHeroes);

//6 gewicht bij elkaar optellen DC Comics
const totalWeightDc = superheroes.filter(marvelHeroes => {
    return marvelHeroes.publisher == "DC Comics"}).map(weightHeroesDc => {
        return weightHeroesDc.weight}).map(weightDcstr => {
            return parseInt(weightDcstr, 10)}).reduce((startWeight, weight) => {
                return weight + startWeight});
console.log(totalWeightDc)

// 7 gewicht bij elkaar optellen Marvel
const totalWeightMarvel = superheroes.filter(marvelHeroes => {
    return marvelHeroes.publisher == "Marvel Comics"}).map(weightMarvelStr => {
        return weightMarvelStr.weight}).map(weightMarvelNum => {
            return parseInt(weightMarvelNum, 10)}).filter(num => {
                return num >=0}).reduce((startWeight, weight) => {
                    return weight + startWeight});
console.log(totalWeightMarvel)

//8 Bonus: heaviest hero!
const heaviestHero = superheroes.filter(weight => {
    return weight.weight > 0
    }).sort((a,b) => {
        return a.weight - b.weight})
        .reverse().shift();
console.log(heaviestHero);

