function solution(s) {
  return s
    .split(' ')
    .map((words, wordsIdx) => {
      return words
        .split('')
        .map((word, wordIdx) => {
          return wordIdx % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
