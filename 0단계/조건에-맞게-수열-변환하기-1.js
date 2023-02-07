function solution(arr) {
  return arr.map((el, idx) => {
    if (el >= 50 && el % 2 === 0) {
      return el / 2;
    }
    if (el <= 50 && el % 2 === 1) {
      return el * 2;
    }
    return el;
  });
}
