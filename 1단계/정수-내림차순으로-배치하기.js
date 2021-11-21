function solution(n) {
  n = String(n);
  return n.split("").sort((a, b) => {
      return b - a;
  }).join("") * 1;
}