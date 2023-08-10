function solution(n, arr = []) {
  if (arr.length === 0) {
    arr.push(n);
  }

  if (n === 1) {
    return arr;
  }

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = n * 3 + 1;
  }

  arr.push(n);

  return solution(n, arr);
}
