function solution(my_string, letter) {
  const regExp = new RegExp(letter, 'g');

  return my_string.replace(regExp, '');
}
