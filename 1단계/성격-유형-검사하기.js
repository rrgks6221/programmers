function solution(survey, choices) {
  let result = '';
  const metric = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((el, idx) => {
    const [a, b] = el.split('');
    const score = choices[idx];

    if (score > 4) {
      metric[b] += score - 4;
    }
    if (score < 4) {
      metric[a] += Math.abs(score - 4);
    }
  });

  const { R, T, C, F, J, M, A, N } = metric;

  if (R >= T) {
    result += 'R';
  } else {
    result += 'T';
  }

  if (C >= F) {
    result += 'C';
  } else {
    result += 'F';
  }

  if (J >= M) {
    result += 'J';
  } else {
    result += 'M';
  }

  if (A >= N) {
    result += 'A';
  } else {
    result += 'N';
  }

  return result;
}
