function solution(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((el, idx) => {
      if (idx % 2 === 0) {
        return el;
      }
      return el + n;
    });
  }

  return arr.map((el, idx) => {
    if (idx % 2 !== 0) {
      return el;
    }

    return el + n;
  });
}
