function solution(num1, num2) {
  const MULTIPLIER = 1000;

  const division = (number1, number2) => {
    return number1 / number2;
  };

  const multiply = (number1, number2) => {
    return number1 * number2;
  };

  return parseInt(multiply(division(num1, num2), MULTIPLIER), 10);
}
