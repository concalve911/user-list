"use strict";
const boxer = "Mike Tyson";
const footballPlayer = "Cristiano Ronaldo";
const basketballPlayer = "Michael Jordan";

const birthdayDate = prompt("what is your birthday year?");
if (birthdayDate === null) {
  alert("you canceled!");
} else {
  const date = Number(birthdayDate);
  if (isNaN(date)) {
    alert("You entered a wrong number");
  } else if (date < 0 || date > 9999) {
    alert("You entered a wrong number");
  } else {
    alert(`your birthday year is ${birthdayDate}`);
  }
}

const city = prompt("In wich city are you located?");
if (city === null) {
  alert("You canceled");
} else if (!city.trim()) {
  alert("you wrote a empty string");
} else {
  const cityLowerCase = city.trim().toLowerCase();
  // переводим строку в маленькие буквы, для лучшего поиска
  if (cityLowerCase === "kyiv") {
    alert("You live in Ukraine");
  } else if (cityLowerCase === "washington") {
    alert("you live in America");
  } else if (cityLowerCase === "london") {
    alert("you live in Great Britain");
  } else {
    alert(`You live in ${city}`);
  }
}

const sport = prompt("What is your favorite sport?");
if (sport === null) {
  alert("You canceled");
} else if (!sport.trim()) {
  alert("you wrote a empty string");
} else {
  const sportLowerCase = sport.trim().toLowerCase();
  // переводим строку в маленькие буквы, для лучшего поиска
  if (sportLowerCase === "box") {
    alert(`Cool, you want to be ${boxer}?`);
  } else if (sportLowerCase === "football") {
    alert(`Cool, you want to be ${footballPlayer}?`);
  } else if (sportLowerCase === "basketball") {
    alert(`Cool, you want to be ${basketballPlayer}?`);
  } else {
    alert(`Your favorite sport is ${sport}`);
  }
}
