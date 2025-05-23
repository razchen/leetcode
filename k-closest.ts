class MinHeap {
  private heap: [number, number[]][] = [];

  insert(val: [number, number[]]) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  private bubbleUp(index: number) {
    const parent = Math.floor((index - 1) / 2);
    if (parent < 0 || this.heap[parent][0] <= this.heap[index][0]) return;

    [this.heap[parent], this.heap[index]] = [
      this.heap[index],
      this.heap[parent],
    ];
    this.bubbleUp(parent);
  }

  extractMin(): [number, number[]] | null {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return min;
  }

  private bubbleDown(index: number) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (
      left < this.heap.length &&
      this.heap[left][0] < this.heap[smallest][0]
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right][0] < this.heap[smallest][0]
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.bubbleDown(smallest);
    }
  }
}

function kClosest(points: number[][], k: number): number[][] {
  const distanceToCenter = (point: number[]): number => {
    return Math.sqrt(Math.pow(point[0] - 0, 2) + Math.pow(point[1] - 0, 2));
  };

  const heap = new MinHeap();

  for (let point of points) {
    const distance = distanceToCenter(point);
    heap.insert([distance, point]);
  }

  const result: number[][] = [];
  for (let i = 0; i < k; i++) {
    const min = heap.extractMin();
    if (min) result.push(min[1]);
  }

  return result;
}

const points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
const k = 2;

console.log(
  JSON.stringify(
    kClosest(
      [
        [1, 3],
        [-2, 2],
        [5, 8],
        [0, 1],
      ],
      2
    )
  )
);
