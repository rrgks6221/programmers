function solution(A, B) {
  if (A === B) {
    return 0;
  }

  for (let i = 1; i < A.length; i += 1) {
    A = A.substr(-1) + A.substr(0, A.length - 1);

    if (A === B) {
      return i;
    }
  }

  return -1;
}
