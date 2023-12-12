function solution(babbling) {
  return babbling.reduce((acc, cur) => {
    const allowWords = ['aya', 'ye', 'woo', 'ma'];
    let exceptionWord = '';

    const say = () => {
      for (let i = 0; i < allowWords.length; i += 1) {
        if (cur.startsWith(allowWords[i]) && allowWords[i] !== exceptionWord) {
          cur = cur.replace(allowWords[i], '');
          exceptionWord = allowWords[i];

          say();
        }
      }
    };

    say();

    if (cur === '') {
      acc += 1;
    }

    return acc;
  }, 0);
}
