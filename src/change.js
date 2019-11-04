const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let Q = 0.25;
let D = 0.10;
let N = 0.05;
let P = 0.01;


if (Number.isNaN(amount)) {
  console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
  console.log("invalid");
} else {

  let Quarters = Math.floor(amount/Q);
  let amount1 = amount % Q;
  let Dimes = Math.floor(amount1/D);
  let amount2 = amount1 % D;
  let Nickels = Math.floor (amount2/N);
  let amount3 = amount2 % N;
  let Pennies = Math.ceil(amount3 / P);
    // write your code for making change here
  console.log("\n" + Quarters + " quarters, " + Dimes + " dimes, " + Nickels + " nickels, and " + Pennies + " pennies.");
}
