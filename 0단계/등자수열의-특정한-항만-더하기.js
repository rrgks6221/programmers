function solution(a, d, included) {
  return included.reduce((acc, cur) => {
    if (cur) {
      acc += a;
    }

    a += d;

    return acc;
  }, 0);
}
