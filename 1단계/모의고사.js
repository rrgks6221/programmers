function solution(answers) {
  const result = [];
  const answersCnt = [0, 0, 0];
  const ways = {
    one: [1, 2, 3, 4, 5],
    two: [2, 1, 2, 3, 2, 4, 2, 5],
    three: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  Object.values(ways).forEach((way, wayIdx) => {
    answers.forEach((answer, answerIdx) => {
      if (way[answerIdx % way.length] === answer) answersCnt[wayIdx] += 1;
    });
  });

  const max = Math.max(...answersCnt);

  answersCnt.forEach((cnt, idx) => {
    if (cnt >= max) result.push(idx + 1);
  });

  return result.sort((a, b) => a - b);
}
