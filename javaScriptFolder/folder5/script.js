// //FOR LOOP.................................
// for (let index = 1; index <= 5; index++) {
//   console.log("Hello! I Am For Loop", index);
//   let a = 2, b = 3;
//   let add = (a+b), sub = (a-b), mul = (a*b), div = (a/b);
//   if (add > 20) {
//     console.log("ADDITION");
//   } else if (sub < 20) {
//     console.log("SUBTARCTION");
//   }
//   else if (mul >= 10) {
//     console.log("MULTIPLICATION");
//   }
//   else if (div <=  23) {
//     console.log("DIVISION");
//   }
//   else{
//     console.log("FALSE");
//   }
// }
// console.log("For Loop Is Ended.");

// //WHILE LOOP..............................
// let count = 1;
// while (count <= 10) {
//   console.log("Hello! I Am While Loop.", count);
//   count++;
// }
// console.log("While Loop Ended.");


// let num = 1;
// while (num <= 10) {
//     // count = 23;
//     if (num %2 == 0) {
//         console.log("Happy =", num);
//     } else {
//         console.log("Sad =", num);
//     }
//     num++;
// }

let star = "*";
let i = 1;
while(i <= 5){
    console.log(star);
    star = star + "*";
    i++;
}


//FUNCTIONS.............

function greet() {
    return "SATURDAY";
}
console.log(greet());
alert(greet());
document.write(greet());