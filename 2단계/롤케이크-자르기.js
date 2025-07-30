function solution(topping) {
  let result = 0;

  const part1 = {};
  let part1ToppingCount = 0;
  const part2 = {};
  let part2ToppingCount = 0;

  for (let i = 0; i < topping.length; i += 1) {
    if (part1[topping[i]] === undefined) {
      part1ToppingCount += 1;
      part1[topping[i]] = 1;
    } else {
      part1[topping[i]] += 1;
    }
  }

  for (let i = 0; i < topping.length; i += 1) {
    if (part2[topping[i]] === undefined) {
      part2ToppingCount += 1;
      part2[topping[i]] = 1;
    } else {
      part2[topping[i]] += 1;
    }

    part1[topping[i]] -= 1;

    if (part1[topping[i]] === 0) {
      part1ToppingCount -= 1;
    }

    if (part1ToppingCount === part2ToppingCount) {
      result += 1;
    }
  }

  return result;
}
