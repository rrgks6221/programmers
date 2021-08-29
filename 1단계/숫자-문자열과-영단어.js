function solution(s) {
  const engWords = {
      "zero": 0,
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9,
  };
  
  for (let word in engWords) {
      let reg = new RegExp(word, "g");
      s = s.replace(reg, engWords[word]);
  }
  return Number(s);
}