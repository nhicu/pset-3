const readlineSync = require("readline-sync");

const grade = String(readlineSync.question("\nEnter a grade: "));

if(grade == "a" || grade == "A" || grade == "a+" || grade == "A+") {
  console.log("\nYour GPA is 4.00.\n");

}else if(grade == "a-" || grade == "A-") {
  console.log("\nYour GPA is 3.67.\n");

}else if(grade == "b+" || grade == "B+") {
  console.log("\nYour GPA is 3.33.\n");

}else if(grade == "b" || grade == "B") {
  console.log("\nYour GPA is 3.00.\n");

}else if(grade == "b-" || grade == "B-") {
  console.log("\nYour GPA is 2.67.\n");

}else if(grade == "c+" || grade == "C+") {
  console.log("\nYour GPA is 2.33.\n");

}else if(grade == "c" || grade == "C") {
  console.log("\nYour GPA is 2.00.\n");

}else if(grade == "c-" || grade == "C-") {
  console.log("\nYour GPA is 1.67.\n");

}else if(grade == "d+" || grade == "D+") {
  console.log("\nYour GPA is 1.33.\n");

}else if(grade == "d" || grade == "D") {
  console.log("\nYour GPA is 1.00.\n");

}else if(grade == "d-" || grade == "D-") {
  console.log("\nYour GPA is 0.67.\n");

}else if(grade == "f" || grade == "F") {
  console.log("\nYour GPA is 0.\n");
}
