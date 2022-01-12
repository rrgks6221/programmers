function solution(n) {
  if (n === 1) return 1;
  let result = 0;
  let currentTemp = 1;
  let pastTemp = 0;

  for (let i = 1; i < n; i++) {
    result = (currentTemp + pastTemp) % 1234567;
    pastTemp = currentTemp % 1234567;
    currentTemp = result % 1234567;
  }
  return result;
}
