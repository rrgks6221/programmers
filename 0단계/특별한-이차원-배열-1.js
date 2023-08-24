function solution(n) {
  return Array.from({ length: n }, (_el, eIdx) => {
    return Array.from({ length: n }, (_el, iIdx) => {
      return Number(eIdx === iIdx);
    });
  });
}
