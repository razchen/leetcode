import { MinHeap } from "./data-structures/min-heap";

function findKthLargest(nums: number[], k: number): number {
  const heap: number[] = [];

  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
      heap.sort((a, b) => a - b);
    } else if (num > heap[0]) {
      heap.push(num);
      heap.sort((a, b) => a - b);
      heap.shift();
    }

    console.log(heap);
  }

  return heap[0];
}

function findKthLargestHeap(nums: number[], k: number): number {
  const heap = new MinHeap();

  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  return heap.peek();
}

const nums = [3, 2, 1, 5, 6, 4];
const k = 4;

// console.log(findKthLargest(nums, k));
console.log(findKthLargestHeap(nums, k));
