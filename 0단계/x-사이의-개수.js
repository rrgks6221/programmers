function solution(myString) {
  return myString.split('x').map((el) => {
    return el.length;
  });
}
