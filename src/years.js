const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\nEnter a year: "));

if(isNaN(year)) {
  console.log("\nInvalid.\n");

}else if(year%4 == 0) {
  console.log("\n" +year+ " is a leap year.\n")

}else if(year%4 !== 0) {
  console.log("\n" +year+ " is not a leap year.\n")
}
