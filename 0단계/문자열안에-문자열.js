function solution(str1, str2) {
  const regExp = new RegExp(str2);

  return regExp.test(str1) ? 1 : 2;
}
