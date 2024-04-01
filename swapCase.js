const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
// Function that takes individual strings after splitting them and gives them opposite cases
function swapCase(string) {
  return string.split('').map(character => {
// Changes characters in Uppercase to lowercase
    if (character === character.toUpperCase()) {
      return character.toLowerCase();
} 
// Changes characters in lowercase to uppercase
else {
  return character.toUpperCase();
}
//Joins the split strings together after cases have been changed to form a complete sentence
 }).join('')
}
// Prompt the user to enter a string
readline.question("Enter a string: ", (input) => {
  const output = swapCase(input);
  console.log(output)
  readline.close()
})