// const number = 10;

// if (number % 2 === 0) {
//   console.log(`Number ${number} is Even Number`);
// } else {
//   console.log(`Number ${number} is Odd Number`);
// }

// const number = 15;

// if (number % 2 === 0) {
//   console.log(`Number ${number} is Even Number`);
// } else {
//   console.log(`Number ${number} is Odd Number`);
// }

// function oddAndEvenCheck(num) {
//   if (num % 2 === 0) {
//     console.log(`Number ${num} is Even Number`);
//   } else {
//     console.log(`Number ${num} is Odd Number`);
//   }
// }

// oddAndEvenCheck(5);
// oddAndEvenCheck(10);
// oddAndEvenCheck(20);
// oddAndEvenCheck(91);
// console.log();
// namta(10);
// const number1 = 3;
// for (let a = 1; a <= 10; a++) {
//   console.log(`${number1} x ${a} = ${number1 * a}`);
// }

// const number2 = 5;
// for (let a = 1; a <= 10; a++) {
//   console.log(`${number2} x ${a} = ${number2 * a}`);
// }

// const number3 = 10;
// for (let a = 1; a <= 10; a++) {
//   console.log(`${number3} x ${a} = ${number3 * a}`);
// }

function namta(number = 1, limit = 10) {
  //   const number = 10;
  for (let a = 1; a <= limit; a++) {
    console.log(`${number} x ${a} = ${number * a}`);
  }
  console.log(" ");
  console.log("-----------------------");
  console.log(" ");
}

namta(10, 5);
namta(20, 2);
namta(30);
namta();
