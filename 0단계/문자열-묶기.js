function solution(strArr) {
  const obj = {};

  strArr.forEach((str) => {
    if (obj[str.length]) {
      obj[str.length] += 1;
    } else {
      obj[str.length] = 1;
    }
  });

  return Math.max(...Object.values(obj));
}
