function solution(my_string, n) {
  let repeatString = '';

  for (let i = 0; i < my_string.length; i += 1) {
    repeatString += my_string[i].repeat(n);
  }

  return repeatString;
}
