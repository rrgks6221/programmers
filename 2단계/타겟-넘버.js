function solution(numbers, target) {
  let result = 0;

  (function cal(count, sum) {
    if (count === numbers.length) {
      if (sum === target) result += 1;
      return;
    }
    cal(count + 1, sum + numbers[count]);
    cal(count + 1, sum - numbers[count]);
  })(0, 0);

  return result;
}
