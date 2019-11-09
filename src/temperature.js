const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));

if(Number.isNaN(temp)){
  console.log("\nInvalid.\n");

}else if(temp<min || temp>max){
  console.log("\nInvalid.\n");

}else if(temp<=32 && scale=="F"){
  console.log("\nSolid.\n");

}else if(temp>=212 && scale=="F"){
  console.log("\nGas.\n");

}else if(32<temp<212 && scale=="F"){
  console.log("\nLiquid.\n");

}else if(temp<=273.15 && scale=="K"){
  console.log("\nSolid.\n");

}else if(temp>=373.15 && scale=="K"){
  console.log("\nGas.\n");

}else if(273.15<temp<373.15 && scale=="K"){
  console.log("\nLiquid.\n");

}else if(temp<=0 && scale=="C"){
  console.log("\nSolid.\n");

}else if(temp>=100 && scale=="C"){
  console.log("\nGas.\n");

}else if(0<temp<100 && scale=="C"){
  console.log("\nLiquid.\n");

}else {
  console.log("\nInvalid.\n")
}
