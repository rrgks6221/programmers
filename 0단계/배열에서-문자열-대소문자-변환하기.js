function solution(strArr) {
  return strArr.map((str, idx) => {
    if (idx % 2 === 0) {
      return str.toLowerCase();
    }
    return str.toUpperCase();
  });
}
