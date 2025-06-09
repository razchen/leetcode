function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  if (indexDiff <= 0 || valueDiff < 0) return false;

  const bucketSize = valueDiff + 1;
  const buckets = new Map<number, number>();

  const getBucketId = (num: number) => {
    return Math.floor(num / bucketSize);
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const bucketId = getBucketId(num);

    // Check current bucket
    if (buckets.has(bucketId)) {
      return true;
    }

    // Check right bucket
    if (
      buckets.has(bucketId + 1) &&
      Math.abs(buckets.get(bucketId + 1)! - num) <= valueDiff
    ) {
      return true;
    }

    // Check left bucket
    if (
      buckets.has(bucketId - 1) &&
      Math.abs(buckets.get(bucketId - 1)! - num) <= valueDiff
    ) {
      return true;
    }

    buckets.set(bucketId, num);

    if (i >= indexDiff) {
      const oldId = getBucketId(nums[i - indexDiff]);
      buckets.delete(oldId);
    }
  }

  return false;
}

const nums = [1, 2, 3, 1];
const indexDiff = 3;
const valueDiff = 0;

// const nums = [1, 5, 9, 1, 5, 9];
// const indexDiff = 2;
// const valueDiff = 3;

// const nums = [1, 0, 1, 1];
// const indexDiff = 1;
// const valueDiff = 2;

// const nums = [0, 10, 22, 15, 0, 5, 22, 12, 1, 5];
// const indexDiff = 3;
// const valueDiff = 3;

// const nums = [0, 7, 30, 60, 90, 120, 150, 180];
// const nums = [3, 6, 0, 4];
// const indexDiff = 1;
// const valueDiff = 2;

// const nums = [1, 2, 3, 1, 2, 3];
// const indexDiff = 2;

// const nums = [1, 2, 1];
// const indexDiff = 1;

// const nums = [0, 1, 2, 3, 2, 5];
// const indexDiff = 3;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
// const indexDiff = 3;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));

// 1 2 3 1

// - -
// -   -
// -     -
//   -   -
//     - -
