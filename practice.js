function namta(number, limit = 10) {
  //   const number = 10;
  for (let a = 1; a <= limit; a++) {
    console.log(`${number} x ${a} = ${number * a}`);
  }
  console.log(" ");
  console.log("-----------------------");
  console.log(" ");
}

// namta(10);

function oddAndEvenCheck(num, isWantNamta = false) {
  if (num % 2 === 0) {
    console.log(`Number ${num} is Even Number`);
    if (isWantNamta) {
      namta(num);
    } else {
    }
  } else {
    console.log(`Number ${num} is Odd Number`);
  }
}

oddAndEvenCheck(3);
oddAndEvenCheck(20, true);
oddAndEvenCheck(5);
