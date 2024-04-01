const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
//Function that uses a for loop to iterate through the inputed numbers and build the new array directly.
function generateArray(start, end) {
  const Array = []
//For when the first number is larger than the second number inputed
  if (start > end) {
    for (let i = start; i >= end; i--) {
      Array.push(i)
    }
  }
//For when the first number is smaller than the second number inputed
else {
    for (let i = start; i <= end; i++) {
      Array.push(i)
    }
  }
  return Array
}
// Prompt the user to enter to input two numbers so as to generate an array
readline.question("Enter the first number: ", (startNumString) => {
  readline.question("Enter the second number: ", (endNumString) => {
    const startNum = +startNumString
    const endNum = +endNumString
    const Array = generateArray(startNum, endNum)
    console.log(Array)
    readline.close()
  })
})
