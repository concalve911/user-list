"use strict";
const boxer = "Mike Tyson";
const footballPlayer = "Cristiano Ronaldo";
const basketballPlayer = "Michael Jordan";

const currentYear = new Date().getFullYear();
// Создание Date(), который отображает текущею дату и время
// getFullYear() возвращает полный год в формате 4 цифр

const birthdayDate = prompt("What is your birthday date?");
let age;
if (birthdayDate === null) {
  alert("You canceled!");
} else {
  const date = Number(birthdayDate);
  if (isNaN(date) || date < 0 || date > currentYear) {
    alert("You entered a wrong number");
  } else {
    age = currentYear - date;
  }
}

const city = prompt("In which city are you located?");
let cityMessage;
if (city === null) {
  alert("You canceled");
} else if (!city.trim()) {
  alert("You wrote an empty string");
} else {
  const cityLowerCase = city.trim().toLowerCase();
  if (cityLowerCase === "kyiv") {
    cityMessage = "You live in Ukraine";
  } else if (cityLowerCase === "washington") {
    cityMessage = "you live in America";
  } else if (cityLowerCase === "london") {
    cityMessage = "you live in Great Britain";
  } else {
    cityMessage = `You live in ${city}`;
  }
}

const sport = prompt("What is your favorite sport?");
let sportMessage;
if (sport === null) {
  alert("You canceled");
} else if (!sport.trim()) {
  alert("You wrote an empty string");
} else {
  const sportLowerCase = sport.trim().toLowerCase();
  if (sportLowerCase === "box") {
    sportMessage = `Cool, you want to be ${boxer}?`;
  } else if (sportLowerCase === "football") {
    sportMessage = `Cool, you want to be ${footballPlayer}?`;
  } else if (sportLowerCase === "basketball") {
    sportMessage = `Cool, you want to be ${basketballPlayer}?`;
  } else {
    sportMessage = `Your favorite sport is ${sport}`;
  }
}

if (
  age !== undefined &&
  cityMessage !== undefined &&
  sportMessage !== undefined
) {
  alert(`Your age is ${age}. ${cityMessage}. ${sportMessage}`);
}
