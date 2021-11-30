function solution(n, m) {
  const myArr = [n, m];
  const result = [];

  myArr.sort((a, b) => {
    return a - b;
  });
  let temp = myArr[1];
  for (let i = myArr[0]; i > 0; i--) {
    if (myArr[0] % i === 0 && myArr[1] % i === 0) {
      result.push(i);
      break;
    }
  }
  while (temp <= n * m) {
    if (temp % myArr[0] === 0) {
      result.push(temp);
      break;
    }
    temp += myArr[1];
  }
  return result;
}
