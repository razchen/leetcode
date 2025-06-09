function integerReplacement(n: number): number {
  let num = n;

  let actions = 0;
  while (num != 1) {
    console.log("num", num);
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 4 === 3 && num !== 3) {
      num++;
    } else {
      num--;
    }

    actions++;
  }

  return actions;
}

const n = 23;
console.log(integerReplacement(n));
