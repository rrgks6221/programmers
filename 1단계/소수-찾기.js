function solution(n) {
  const answer = [];
  
  for (let i = 0; i < n + 1; i++) answer.push(true);
  
  for (let i = 2; i * i <= n; i++) {
      if (answer[i]) {
          for (let j = i * i; j <= n; j += i) answer[j]= false;
      }
  }
  return answer.filter((e) => {
      return e !== false
  }).length - 2;
}