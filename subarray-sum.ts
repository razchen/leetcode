function subarraySum(nums: number[], k: number): number {
  const prefixCounts = new Map<number, number>();
  prefixCounts.set(0, 1);

  let count = 0;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;

    const diff = prefixSum - k;
    if (prefixCounts.has(diff)) {
      count += prefixCounts.get(diff)!;
    }

    prefixCounts.set(prefixSum, (prefixCounts.get(prefixSum) || 0) + 1);

    console.log("prefixSum", prefixSum);
    console.log("prefix counts", prefixCounts);
  }

  return count;
}

const nums = [1, 2, 3];
const k = 3;

subarraySum(nums, k);
