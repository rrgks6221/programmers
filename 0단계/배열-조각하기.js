function solution(arr, query) {
  query.forEach((el, idx) => {
    if (idx % 2 === 0) {
      arr.splice(el + 1, arr.length);
      return;
    }
    arr.splice(0, el);
  });

  return arr;
}
