function solution(arr, queries) {
  queries.forEach((query) => {
    const [a, b] = query;

    [arr[a], arr[b]] = [arr[b], arr[a]];
  });

  return arr;
}
