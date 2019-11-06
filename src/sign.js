const readlineSync = require("readline-sync");
const min = Number.MIN_SAFE_INTEGER
const max = Number.MAX_SAFE_INTEGER
const number = Number(readlineSync.question("\nEnter a number: "));

if(isNaN(number)) {
  console.log("\nInvalid.");

}else if (number==0) {
  console.log("\nZero.");

}else if (number<0) {
  console.log("\nNegative.");

}else if (number>0)  {
  console.log("\nPositive.");
}
