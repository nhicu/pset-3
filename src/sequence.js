const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

const numbera = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const numberb = Number(readlineSync.question(""))
const numberc = Number(readlineSync.question(""))

if(numbera==numberb && numberb==numberc) {
  console.log("\nEqual\n");
}else if(numbera, numberb, numberc < min || numbera, numberb, numberc > max) {
   console.log("\nInvalid.\n")
}else if(Number.isNaN(numbera, numberb, numberc)) {
    console.log("\nInvalid.\n");
}else if(numbera < numberb && numberb == numberc || numbera == numberb && numberb < numberc) {
    console.log("\nIncreasing.\n");
}else if(numbera == numberb && numberb > numberc || numbera > numberb && numberb == numberc) {
    console.log("\nDecreasing.\n");
}else if(numbera>numberb && numberb>numberc) {
    console.log("\nStrictly decreasing.\n");
}else if(numbera<numberb && numberb<numberc) {
    console.log("\nStrictly increasing.\n");
}else{
  console.log("\nUnordered.\n");
}
