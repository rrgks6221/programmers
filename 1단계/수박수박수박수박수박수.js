function solution(n) {
  // 계정분리 테스트
  return n % 2 ? "수박".repeat(n / 2) + "수" : "수박".repeat(n / 2);
}
