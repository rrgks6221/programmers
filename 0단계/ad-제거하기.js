function solution(strArr) {
  return strArr.filter((el) => {
    return !el.includes('ad');
  });
}
