const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter a number: "));

if(isNaN(number)) {
  console.log("\nInvalid.\n");

}else if (number==0) {
  console.log("\nZero.\n");

}else if (number<0) {
  console.log("\nNegative.\n");

}else if(number>0)  {
  console.log("\nPositive.\n");
}
