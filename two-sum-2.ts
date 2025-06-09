function twoSum(numbers: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num + numbers[i+1] === target) {
      return [i + 1, i + 2]
    }

    map.set(num, i);
  }

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num > target) break;

    const sumNum = target - num;

    if (map.has(sumNum)) {
      const sumNumPos = map.get(sumNum) || 0;
      return [i + 1, sumNumPos + 1];
    }
  }

  return [0, 0];
}

// const numbers = [2, 7, 11, 15];
// const target = 9;

// const numbers = [2,3,4]
// const target = 6;

const numbers = [-1, 0];
const target = -1;

console.log(twoSum(numbers, target));
