function solution(q, r, code) {
  let myString = '';

  for (let i = r; i < code.length; i += q) {
    myString += code[i];
  }

  return myString;
}
