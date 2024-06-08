// Q1: Solve the below code of expressions using short circuit?
let exp = "faraz" || (true + false + 5 && " ") || "true";
// Ans 1 "faraz"
console.log(exp);

let b = 3;
let exp1 = 1 + 2 + ++b || (5 && 0); // for b = 3;
//   3  +    4
// ANS = 7
console.log(exp1);

a = 5;
let exp2 = (32 && true - ++a && " ") || "true";
//    true     " "
//   ANS= " "
console.log(exp2);

let exp3 = ((true + 3) * 5 && undefined) || "faraz" + 5;
//  undefined           faraz5
// ANS faraz5
console.log(exp3);

let exp4 = 32 + "abc" || true + false + false || +5 || "true";
//  ANS =  23 abc

console.log(exp4);

let exp5 = false || (true + true + 15 && "") || 50;
//    f        2    +   15
//    f         17
//    17 && "" || 50;
//    "" 50
//      50
console.log(exp5);

let exp6 = true + false + 5 || false + 8 + "abc" || "true";
// 6
console.log(exp6);

let exp7 = "faraz" || false + 10 || "true";
//  ANS =faraz

console.log(exp7);

let exp8 = (12 + (false + false) + true && null) || "faraz";

// 13 && null
// null  || faraz
// ANS =faraz
console.log(exp8);

let exp9 = false + true + false + 2 || ("faraz" && false) || 1 + 10;
//ANS=  3

console.log(exp9);

let exp10 = true + false + 5 || false + 8 + "abc" || "true";
//  ANS= 6

console.log(exp10);

let exp11 =
  ((true + false) * 3 && "") || false + true - (12 + true + true + false);
//   3 && ""
//   "" || 1- 14
// -13
console.log(exp11);
