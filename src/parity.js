const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter an integer: "));

if(isNaN(number)) {
  console.log("\nInvalid.");

}else if(number%2==0) {
  console.log("\nEven.");

}else if(number%2!==0) {
  console.log("\nOdd.");
}
