export class MinHeap {
  private heap: number[] = [];

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length && end !== undefined) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return top;
  }

  private bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i] >= this.heap[parent]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  private bubbleDown() {
    let i = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
