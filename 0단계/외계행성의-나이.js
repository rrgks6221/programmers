function solution(age) {
  return String(age)
    .split('')
    .map((el) => String.fromCharCode(97 + Number(el)))
    .join('');
}
