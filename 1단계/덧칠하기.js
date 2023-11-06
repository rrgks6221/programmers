function solution(n, m, section) {
  let count = 0;
  let cur = section[0];

  while (section.length) {
    count += 1;

    while (cur + m > section[0]) {
      section.shift();
    }

    cur = section[0];
  }

  return count;
}
