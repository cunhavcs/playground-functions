// Desafio 11
const generatePhoneNumber = (numbers) => {
  let phoneNumber = '';
  let currentCount = 0;

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        currentCount += 1;
      }
    }

    if (currentCount >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    currentCount = 0;  
  
    switch (index) {
      case 0:
        phoneNumber += `(${numbers[index]}`;
        break;
      case 2:
        phoneNumber += `) ${numbers[index]}`;
        break;
      case 7:
        phoneNumber += `-${numbers[index]}`;
        break;
      default:
        phoneNumber += numbers[index];
    }
  }
  return phoneNumber;
};

// Desafio 12
const triangleCheck = (lineA, lineB, lineC) => (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) && (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB));

// Desafio 13
const hydrate = (drinks) => {
  let regex = /\d/g;
  let drinkNumberList = drinks.match(regex);
  let sumOfDrinks = 0;

  for (let index = 0; index < drinkNumberList.length; index += 1) {
    drinkNumberList[index] = parseInt(drinkNumberList[index], 10);
    sumOfDrinks += drinkNumberList[index];
  }
  if (sumOfDrinks > 1) {
    return `${sumOfDrinks} copos de água`;
  }
  return `${sumOfDrinks} copo de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
