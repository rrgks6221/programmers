function solution(start, end) {
  return Array.from({ length: start - end + 1 }, (_el, idx) => {
    return start - idx;
  });
}
