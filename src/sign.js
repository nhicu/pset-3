const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

if (Number.MAX_SAFE_INTEGER(number))  {
  console.log("\nPositive.");
}else if (Number.MIN_SAFE_INTEGER(number)) {
  console.log("\nNegative.");
}else if (number=0) {
  console.log("\nZero.");
}else if (Number.NaN(number)) {
  console.log("\nInvalid.")
}
