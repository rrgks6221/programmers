function solution(n, k) {
  const myArr = [];

  for (let i = k; i <= n; i += k) {
    myArr.push(i);
  }

  return myArr;
}
