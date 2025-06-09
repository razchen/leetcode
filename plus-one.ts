function plusOne(digits: number[]): number[] {
  const checkDigit = (i: number) => {
    if (digits[i] === undefined) {
      digits[i + 1] = 0;
      digits.unshift(1);
      return;
    }

    if (digits[i] <= 8) {
      digits[i]++;
    } else {
      digits[i] = 0;
      checkDigit(i - 1);
    }
  };

  checkDigit(digits.length - 1);

  return digits;
}

// const digits = [0];
// const digits = [1, 2, 3];
// const digits = [4,3,2,1];
const digits = [9];
// const digits = [1, 9];
console.log(plusOne(digits));
