function solution(quiz) {
  return quiz
    .map((el) => {
      return el.split('=').reverse().join(' === ');
    })
    .map((el) => {
      return Function('return ' + el)();
    })
    .map((el) => {
      return el ? 'O' : 'X';
    });
}
