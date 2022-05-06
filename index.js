console.log("Ex1-----------------");
const numberOperation = (number) => {
  if (number % 2 !== 0) {
    return number * 2;
  } else {
    return number - 2;
  }
}
console.log(numberOperation(3));

console.log("Ex2-----------------");
let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const savePrimes = (array) => {
  let arrayPrimeNumbers = Array();
  arrayPrimeNumbers = array.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  return arrayPrimeNumbers;
}
const primeNumbers = savePrimes(numArray);
for (let i = 0; i < primeNumbers.length; i++) {
  console.log(primeNumbers[i]);
}

console.log("Ex3-----------------");
let saveStringsArray = [1, "1", "salut", 2, 6, true, "true"];
function saveStrings(array) {
  let stringElements = Array();
  array.forEach(element => {
    if (typeof element == 'string') {
      stringElements.push(elemefnt);
    }
  });
  return stringElements;
}
let stringsArray = saveStrings(saveStringsArray);
stringsArray.forEach(element => {
  console.log(element);
});

console.log("Ex4-----------------");
let numbers = "1523";
function sumOddNumbers(number) {
  let numbersArray = number.split('');
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (Number(numbersArray[i]) % 2 === 0) {
      continue;
    } else {
      sum += Number(numbersArray[i]);
    }
  }
  return sum;
}
console.log(sumOddNumbers(numbers));

console.log("Ex5-----------------");
const carType = 'Opel';
switch (carType) {
  case 'Seat':
    console.log(carType + ' is from Spain');
    break;
  case 'Hyundai':
    console.log(carType + ' is from South Korea');
    break;
  case 'Toyota':
    console.log(carType + ' is from Japan');
    break;
  case 'Opel':
  case 'Mercedes':
    console.log(carType + ' is from Germany');
    break;
  default:
    console.log('The car is not in the list.');
}