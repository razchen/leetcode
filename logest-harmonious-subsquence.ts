function findLHS(nums: number[]): number {
  const count = new Map<number, number>();
  let max = 0;

  for (let num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  for (let [num, cnt] of count.entries()) {
    const nextNum = count.get(num + 1);
    if (nextNum) {
      max = Math.max(max, cnt + nextNum);
    }
  }

  return max;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
// const nums = [1,2,3,4]
// const nums = [1,1,1,1]
console.log(findLHS(nums));
