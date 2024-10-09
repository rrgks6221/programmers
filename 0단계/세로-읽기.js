function solution(my_string, m, c) {
  let myString = '';

  for (let i = 0; i < my_string.length; i += m) {
    myString += my_string[i + c - 1];
  }

  return myString;
}
