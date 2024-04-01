const readline= require("readline").createInterface({
  input:  process.stdin,
  output: process.stdout,
})
//Function  determines whether number is prime.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Function that takes an array of numbers and filters to return only the prime numbers
function filterPrimes(array) {
  return array.filter(isPrime);
}
// Prompts user to enter a string of numbers which is converted to an array and returns only the prime numbers in the array
readline.question("Enter an array: ", (input) => {
  const numberArray = input.split(",").map(Number); // Split, convert to numbers, create array
  const output =filterPrimes(numberArray)
  console.log(output)
  readline.close()
})
