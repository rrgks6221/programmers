function solution(k, score) {
  const queue = [];

  return score.map((el) => {
    if (queue.length < k) {
      queue.push(el);
    } else if (queue.at(-1) < el) {
      queue.pop();
      queue.push(el);
    }

    queue.sort((a, b) => b - a);

    return queue.at(-1);
  });
}
