function solution(A, B) {
  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return a - b;
  });

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[B.length - i - 1];
  }
  return result;
}
