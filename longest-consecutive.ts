function longestConsecutive(nums: number[]): number {
  let longestCount = 0;
  const mySet = new Set<number>();

  for (let num of nums) {
    mySet.add(num);
  }

  for (let num of mySet) {
    if (!mySet.has(num - 1)) {
      let currentNum = num;
      let currentCount = 0;

      while (mySet.has(currentNum)) {
        currentCount++;
        currentNum++;
      }

      longestCount = Math.max(longestCount, currentCount);
    }
  }

  return longestCount;
}

// const nums = [100, 4, 200, 1, 3, 2];
// const nums = [1,0,1,2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
