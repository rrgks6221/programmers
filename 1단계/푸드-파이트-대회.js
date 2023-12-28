function solution(food) {
  let left = '';
  let right = '';

  food.shift();

  food.forEach((el, idx) => {
    const str = String(idx + 1).repeat(Math.floor(el / 2));

    left += str;
    right = str.split('').join('') + right;
  });

  return left + '0' + right;
}
