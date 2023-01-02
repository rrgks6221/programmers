function solution(babbling) {
  const PRONOUNCEABLE_WORDS = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((acc, cur) => {
    let replacedWord = cur;

    PRONOUNCEABLE_WORDS.forEach((word) => {
      replacedWord = replacedWord.replace(word, '1');
    });

    return (acc += Number(!/[a-z]/.test(replacedWord)));
  }, 0);
}
