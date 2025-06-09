function intersect(nums1: number[], nums2: number[]): number[] {
  const set1 = new Map<number, number>();
  const result: number[] = [];

  const test1 = nums1.length > nums2.length ? nums1 : nums2;
  const test2 = nums1.length > nums2.length ? nums2 : nums1;

  for (let num of test1) {
    const currentCount = set1.get(num) || 0
    set1.set(num, currentCount + 1);
  }

  for (let num of test2) {
    if (set1.has(num)) {
      const currentCount = set1.get(num) || 0

      if (currentCount > 1) {
        set1.set(num, currentCount - 1);
      } else {
        set1.delete(num);
      }

      result.push(num);
    }
  }

  return result;
}
// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4];

const nums1 = [1, 2, 3, 4, 6];
const nums2 = [1, 2, 3, 4];
console.log(intersect(nums1, nums2));
