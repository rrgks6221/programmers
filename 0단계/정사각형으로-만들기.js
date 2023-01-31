function solution(arr) {
  const rowLength = arr.length;

  for (let i = 0; i < rowLength; i += 1) {
    if (arr[i].length < rowLength) {
      arr[i].push(...new Array(rowLength - arr[i].length).fill(0));
    }
  }

  const columnLength = arr[0].length;

  for (let i = rowLength; i < columnLength; i += 1) {
    arr.push(new Array(columnLength).fill(0));
  }

  return arr;
}
