function solution(n) {
  const answer = []
  let temp = 10;
  
  while (n >= 1) {
      answer.push(parseInt(n % temp));
      n /= temp;
  }
  return answer;
}