function solution(myString, pat) {
  const regExp = new RegExp(pat, 'i');

  return Number(regExp.test(myString));
}
