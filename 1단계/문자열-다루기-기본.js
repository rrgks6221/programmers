function solution(s) {
  return !/[a-z]/g.test(s) && (s.length === 4 || s.length === 6);
}
