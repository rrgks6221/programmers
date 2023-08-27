function solution(want, number, discount) {
  let result = 0;

  number
    .map((el) => el - 1)
    .forEach((el, idx) => {
      for (let i = 0; i < el; i += 1) {
        want.push(want[idx]);
      }
    });

  for (let i = 0; i < discount.length - 9; i += 1) {
    const myWant = [...want];

    for (let j = i; j < i + 10; j += 1) {
      const wantIdx = myWant.indexOf(discount[j]);

      if (wantIdx !== -1) {
        myWant.splice(wantIdx, 1);
      }
    }

    if (myWant.length === 0) {
      result += 1;
    }
  }

  return result;
}
