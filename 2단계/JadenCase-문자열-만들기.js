function solution(s) {
  s = s.toLowerCase().split(' ');

  s.forEach((el, idx) => {
    if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
      s[idx] = el.replace(/\w/, el[0].toUpperCase());
    }
  });

  return s.join(' ');
}
