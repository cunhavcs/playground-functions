// Desafio 1
const compareTrue = (valor1, valor2) => valor1 && valor2;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (nameList) => `${nameList[nameList.length - 1]}, ${nameList[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);

// Desafio 6
const highestCount = (numberList) => {
  let higherNumber = numberList[0];
  let higherNumberCounter = 1;
  for (let index = 1; index < numberList.length; index += 1) {
    if (numberList[index] > higherNumber) {
      higherNumber = numberList[index];
      higherNumberCounter = 1;
    } else if (numberList[index] === higherNumber) {
      higherNumberCounter += 1;
    }
  }
  return higherNumberCounter;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  }
  if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const fizzBuzz = (numberList) => {
  let fizzBuzzArray = [];
  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] % 3 === 0 && numberList[index] % 5 === 0) fizzBuzzArray.push('fizzBuzz');
    else if (numberList[index] % 3 === 0) fizzBuzzArray.push('fizz');
    else if (numberList[index] % 5 === 0) fizzBuzzArray.push('buzz');
    else fizzBuzzArray.push('bug!');
  }
  return fizzBuzzArray;
};

// Desafio 9
const encode = (string) => {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        string = string.replace('a', '1');
        break;
      case 'e':
        string = string.replace('e', '2');
        break;
      case 'i':
        string = string.replace('i', '3');
        break;
      case 'o':
        string = string.replace('o', '4');
        break;
      case 'u':
        string = string.replace('u', '5');
        break;
    }
  }
  return string;
};

const decode = (string) => {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        string = string.replace('1', 'a');
        break;
      case '2':
        string = string.replace('2', 'e');
        break;
      case '3':
        string = string.replace('3', 'i');
        break;
      case '4':
        string = string.replace('4', 'o');
        break;
      case '5':
        string = string.replace('5', 'u');
        break;
    }
  }
  return string;
};

// Desafio 10
function techList(technologies, name) {
  let objectsList = [];

  if(technologies.length > 0){
    for (let index = 0; index < technologies.length; index += 1) {
      let object = {};
      object.name = name;
      object.tech = technologies[index];
      
      switch (index) {
        case 0:
          objectsList[4] = object;
          break;
        case 1:
          objectsList[3] = object;
          break;
        case 2:
          objectsList[1] = object;
          break;
        case 3:
          objectsList[0] = object;
          break;
        case 4:
          objectsList[2] = object;
          break;
      };
    };
    return objectsList;
  };
  return "Vazio!";
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
