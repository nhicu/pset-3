const readlineSync = require("readline-sync");

const c = String(readlineSync.question("\nEnter a playing card: "));

const two = "\nTwo";
const three = "\nThree";
const four = "\nFour";
const five = "\nFive";
const six = "\nSix";
const seven = "\nSeven";
const eight = "\nEight";
const nine = "\nNine";
const ten = "\nTen";
const jack = "\nJack";
const queen = "\nQueen";
const king = "\nKing";
const ace = "\nAce";

const C = " of Clubs.\n";
const D = " of Diamonds.\n";
const H = " of Hearts.\n";
const S = " of Spades.\n";

if (c == "AS" || c == "as"){
    console.log(ace.concat(S) + "");
} else if (c == "AH" || c == "ah"){
    console.log(ace.concat(H) + "");
} else if (c == "AD" || c == "ad"){
    console.log(ace.concat(D) + "");
} else if (c == "AC" || c == "ac"){
    console.log(ace.concat(C) + "");

} else if (c == "KS" || c == "ks"){
    console.log(king.concat(S) + "");
} else if (c == "KH" || c == "kh"){
    console.log(king.concat(H) + "");
} else if (c == "KD" || c == "kd"){
    console.log(king.concat(D) + "");
} else if (c == "KC" || c == "kc"){
    console.log(king.concat(C) + "");

} else if (c == "QS" || c == "qs"){
    console.log(queen.concat(S) + "");
} else if (c == "QH" || c == "qh"){
    console.log(queen.concat(H) + "");
} else if (c == "QD" || c == "qd"){
    console.log(queen.concat(D) + "");
} else if (c == "QC" || c == "qc"){
    console.log(queen.concat(C) + "");

} else if (c == "JS" || c == "js"){
    console.log(jack.concat(S) + "");
} else if (c == "JH" || c == "jh"){
    console.log(jack.concat(H) + "");
} else if (c == "JD" || c == "jd"){
    console.log(jack.concat(D) + "");
} else if (c == "JC" || c == "jc"){
    console.log(jack.concat(C) + "");

} else if (c == "TS" || c == "ts"){
    console.log(ten.concat(S) + "");
} else if (c == "TH" || c == "th"){
    console.log(ten.concat(H) + "");
} else if (c == "TD" || c == "td"){
    console.log(ten.concat(D) + "");
} else if (c == "TC" || c == "tc"){
    console.log(ten.concat(C) + "");

} else if (c == "9S" || c == "9s"){
    console.log(nine.concat(S) + "");
} else if (c == "9H" || c == "9h"){
    console.log(nine.concat(H) + "");
} else if (c == "9D" || c == "9d"){
    console.log(nine.concat(D) + "");
} else if (c == "9C" || c == "9c"){
    console.log(nine.concat(C) + "");

} else if (c == "8S" || c == "8s"){
    console.log(eight.concat(S) + "");
} else if (c == "8H" || c == "8h"){
    console.log(eight.concat(H) + "");
} else if (c == "8D" || c == "8d"){
    console.log(eight.concat(D) + "");
} else if (c == "8C" || c == "8c"){
    console.log(eight.concat(C) + "");

} else if (c == "7S" || c == "7s"){
    console.log(seven.concat(S) + "");
} else if (c == "7H" || c == "7h"){
    console.log(seven.concat(H) + "");
} else if (c == "7D" || c == "7d"){
    console.log(seven.concat(D) + "");
} else if (c == "7C" || c == "7c"){
    console.log(seven.concat(C) + "");

} else if (c == "6S" || c == "6s"){
    console.log(six.concat(S) + "");
} else if (c == "6H" || c == "6h"){
    console.log(six.concat(H) + "");
} else if (c == "6D" || c == "6d"){
    console.log(six.concat(D) + "");
} else if (c == "6C" || c == "6c"){
    console.log(six.concat(C) + "");

} else if (c == "5S" || c == "5s"){
    console.log(five.concat(S) + "");
} else if (c == "5H" || c == "5h"){
    console.log(five.concat(H) + "");
} else if (c == "5D" || c == "5d"){
    console.log(five.concat(D) + "");
} else if (c == "5C" || c == "5c"){
    console.log(five.concat(C) + "");

} else if (c == "4S" || c == "4s"){
    console.log(four.concat(S) + "");
} else if (c == "4H" || c == "4h"){
    console.log(four.concat(H) + "");
} else if (c == "4D" || c == "4d"){
    console.log(four.concat(D) + "");
} else if (c == "4C" || c == "4c"){
    console.log(four.concat(C) + "");

} else if (c == "3S" || c == "3s"){
    console.log(three.concat(S) + "");
} else if (c == "3H" || c == "3h"){
    console.log(three.concat(H) + "");
} else if (c == "3D" || c == "3d"){
    console.log(three.concat(D) + "");
} else if (c == "3C" || c == "3c"){
    console.log(three.concat(C) + "");

} else if (c == "2S" || c == "2s"){
    console.log(two.concat(S) + "");
} else if (c == "2H" || c == "2h"){
    console.log(two.concat(H) + "");
} else if (c == "2D" || c == "2d"){
    console.log(two.concat(D) + "");
} else if (c == "2C" || c == "2c"){
    console.log(two.concat(C) + "");
}else{
  console.log("\nInvalid\n")
}
