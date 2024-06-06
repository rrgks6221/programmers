function solution(intStrs, k, s, l) {
  return intStrs
    .map((intStr) => {
      return Number(intStr.slice(s, s + l));
    })
    .filter((sliceIntStr) => {
      return sliceIntStr > k;
    });
}
