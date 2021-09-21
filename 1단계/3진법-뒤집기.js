function solution(n) {
  let three = "";
  let result = 0;
  while (n > 2) {
      three = n % 3 + three;
      n = parseInt(n / 3);
  }
  three = n % 3 + three;
      console.log(three);
  for (let i = 0; i < three.length; i++) {
      result += Math.pow(3, i) * three[i];
  }
  return result;
}