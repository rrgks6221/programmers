function solution(k, tangerine) {
  const obj = {};

  for (let i = 0; i < tangerine.length; i += 1) {
    if (obj[tangerine[i]]) {
      obj[tangerine[i]] += 1;
    } else {
      obj[tangerine[i]] = 1;
    }
  }

  const arr = Object.entries(obj);

  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i += 1) {
    k -= arr[i][1];

    if (k <= 0) {
      return i + 1;
    }
  }
}
