class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  get(idx) {
    return this.heap[idx];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 값 삽입후 오름차순 정렬
  push(value) {
    this.heap.push(value);

    let childIdx = this.heap.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (childIdx > 0 && this.heap[childIdx] < this.heap[parentIdx]) {
      this.swap(childIdx, parentIdx);

      childIdx = Math.floor((childIdx - 1) / 2);
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return value;
  }

  // 값을 빼되, 오름차순 정렬
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    let parentIdx = 0;

    this.heap[0] = this.heap.pop();

    while (parentIdx * 2 + 1 < this.heap.length) {
      const aChildIdx = parentIdx * 2 + 1;
      const bChildIdx = parentIdx * 2 + 2;
      const minChildIndex =
        this.heap[aChildIdx] > this.heap[bChildIdx] ? bChildIdx : aChildIdx;

      if (this.heap[parentIdx] < this.heap[minChildIndex]) {
        break;
      }

      this.swap(parentIdx, minChildIndex);
      parentIdx = minChildIndex;
    }

    return root;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach((s) => {
    minHeap.push(s);
  });

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.get(0) < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedFood = first + second * 2;

    minHeap.push(mixedFood);
    mixedCount += 1;
  }

  if (minHeap.get(0) >= K) {
    return mixedCount;
  }
  return -1;
}
