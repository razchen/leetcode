function mySqrt(x: number): number {
  let low = 0;
  let high = x;
  let result = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const sq = mid * mid;

    if (sq > x) {
      high = mid - 1;
    } else if (sq < x) {
      result = mid;
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return result;
}

// const x = 4;

const x = 8;

// const x = 16

// low = 0
// high = 16
// mid = 8

console.log(mySqrt(x));
