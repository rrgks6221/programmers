function solution(myString, pat) {
  const arr = [];

  for (let i = 0; i <= myString.length - pat.length; i += 1) {
    arr.push(myString.slice(i, i + pat.length));
  }

  return arr.filter((el) => el === pat).length;
}
