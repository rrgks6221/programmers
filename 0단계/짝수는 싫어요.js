function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, idx) => {
    return idx * 2 + 1;
  });
}
