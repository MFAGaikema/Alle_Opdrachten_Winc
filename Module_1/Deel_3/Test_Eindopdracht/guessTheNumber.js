//naam deelnemer
let name = prompt("Welkom! Wat is je naam?", "");

alert("Hey " + name);

//for loop, na 5 keer stopt hij automatisch
let start = 4;
for (i=start; i >= 0; i--) {
  //input speler
  let playerNumstr = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..."); 

  let playerNum = parseInt(playerNumstr, 10);

//input computer
  let randomNum = (max) => {
    return randomNum = Math.floor(max * Math.random());
    }
  randomNum(25);  


//function
  const equalizer = (repeats) => {
    if (randomNum === playerNum) {
        alert("Gefeliciteerd! Je hebt het juiste nummer geraden!");
        return i = 0;
    } else {
      if (i > 1) {
        return alert("Dat is niet correct! Probeer het nog eens, je hebt nog " + i + " pogingen!");
      } else if (i > 0) {
        return alert("Dat is niet correct! Probeer het nog eens, je hebt nog " + i + " poging!");
      } else {
        return alert("Sorry je hebt geen pogingen meer!")
      }
    }
}
equalizer(i);
}

alert("Dag " + name + ", tot de volgende keer!");