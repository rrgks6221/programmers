function solution(arr, count = 0) {
  const newArr = arr.map((el) => {
    if (el >= 50 && el % 2 === 0) {
      return el / 2;
    }
    if (el < 50 && el % 2 === 1) {
      return el * 2 + 1;
    }
    return el;
  });

  if (JSON.stringify(arr) === JSON.stringify(newArr)) {
    return count;
  }

  return solution(newArr, count + 1);
}
