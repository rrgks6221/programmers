function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i += 1) {
      arr[i] += 1;
    }
  });

  return arr;
}
