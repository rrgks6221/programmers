function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const myArr = arr.slice(s, e + 1).filter((el, a, b) => {
      return el > k;
    });

    if (myArr.length === 0) {
      myArr.push(-1);
    }

    return Math.min(...myArr);
  });
}
