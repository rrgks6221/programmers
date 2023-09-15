function solution(arr) {
  const getLCM = (a, b) => {
    const commonMultiples = [1];
    let min = Math.min(a, b);

    for (let i = 2; i <= min; i += 1) {
      if (a % i === 0 && b % i === 0) {
        a /= i;
        b /= i;
        min = Math.min(a, b);

        commonMultiples.push(i);
        i = 1;
      }
    }

    return (
      a *
      b *
      commonMultiples.reduce((acc, cur) => {
        return acc * cur;
      })
    );
  };

  let result = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    result = getLCM(result, arr[i]);
  }

  return result;
}
