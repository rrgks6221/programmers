function solution(cards1, cards2, goal) {
  return goal.every((el) => {
    if (cards1[0] === el) {
      cards1.shift();

      return true;
    }
    if (cards2[0] === el) {
      cards2.shift();

      return true;
    }

    return false;
  })
    ? 'Yes'
    : 'No';
}
