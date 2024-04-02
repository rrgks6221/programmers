function solution(score) {
  return score
    .map((el) => {
      return (
        el.reduce((acc, cur) => {
          return acc + cur;
        }, 0) / el.length
      );
    })
    .map((average, outerIdx, array) => {
      return array.reduce((acc, cur, innerIdx) => {
        if (outerIdx === innerIdx) {
          return acc;
        }
        if (average === cur) {
          return acc;
        }

        return (acc += Number(average < cur));
      }, 1);
    });
}
