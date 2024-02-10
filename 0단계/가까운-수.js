function solution(array, n) {
  return array
    .map((el) => {
      return [Math.abs(n - el), el];
    })
    .sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1];
    })[0][1];
}
