function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
          arr[i] = "";
      }
  }
  return arr.join("").split("").map(Number);
}