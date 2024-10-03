function solution(myStr) {
  const myArr = myStr
    .replace(/(a|b|c)/g, '0')
    .split('0')
    .filter((el) => el);

  return myArr.length ? myArr : ['EMPTY'];
}
