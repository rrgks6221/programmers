function solution(n) {
  const add = (number) => {
    if (number % 3 === 0) {
      number += 1;

      return add(number);
    }

    if (/3/.test(String(number))) {
      number += 1;

      return add(number);
    }

    return number;
  };

  let answer = 0;

  for (let i = 1; i <= n; i += 1) {
    answer += 1;

    answer = add(answer);
  }

  return answer;
}
