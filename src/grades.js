const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const Ahigh = 100;
const Areg = 90;
const Breg = 80;
const Creg = 70;
const Dreg = 60;


if(Number.isNaN(grade)){
  console.log("\nInvalid.\n");

}else if(Ahigh>=grade && grade>=Areg){
  console.log("\nYou received an A.\n");

}else if(Areg>grade && grade>=Breg){
  console.log("\nYou received a B.\n");

}else if(Breg>grade && grade>=Creg){
  console.log("\nYou received a C.\n");

}else if(Creg>grade && grade>=Dreg){
  console.log("\nYou received a D.\n");

}else if(grade<Dreg){
  console.log("\nYou received a F.")
}
