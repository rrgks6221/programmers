function solution(s, n) {
  let temp = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
      if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
          temp = s[i].charCodeAt(0) + n;
          if (temp > 90) temp -= 26;
          s[i] = String.fromCharCode(temp);
      }
      
      if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
          temp = s[i].charCodeAt(0) + n;
          if (temp > 122) temp -= 26;
          s[i] = String.fromCharCode(temp);
      }
  }
  return s.join("");
}