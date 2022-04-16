function solution(w, h) {
  function getGCD(num1, num2) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }

    return gcd;
  }

  return w * h - (w + h - getGCD(w, h));
}
