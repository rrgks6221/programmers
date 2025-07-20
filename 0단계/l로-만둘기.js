function solution(myString) {
  return [...myString]
    .map((el) => {
      if (el > 'l') {
        return el;
      }
      return 'l';
    })
    .join('');
}
