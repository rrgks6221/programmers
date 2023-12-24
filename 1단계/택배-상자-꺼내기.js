/**
 *
 * @param {number} n
 * @param {number} w
 * @param {number} num
 * @returns
 */
function solution(n, w, num) {
  const boxes = [];

  for (let i = 1; i <= w; i += 1) {
    let isReverse = false;
    const increment = [w * 2 - (i - 1) * 2 - 1, (i - 1) * 2 + 1];

    const boxParts = [];
    let boxNumber = i;
    while (boxNumber <= n) {
      boxParts.push(boxNumber);

      boxNumber += increment[Number(isReverse)];
      isReverse = !isReverse;
    }

    boxes.push(boxParts);
  }

  const targetFloor = boxes.find((boxParts) => {
    return boxParts.find((boxNumber) => boxNumber === num) !== undefined;
  });
  const targetIndex = targetFloor.findIndex((boxNumber) => boxNumber === num);

  return targetFloor.length - targetIndex;
}
