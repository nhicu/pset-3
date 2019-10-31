const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let Q = 0.25
let D = 0.10
let N = 0.05
let P = 0.01

if (Number.isNaN(amount)) {
    // print your error message here
} else if (amount < MIN || amount > MAX) {
    // print your error message here
} else {
    // write your code for making change here
}
