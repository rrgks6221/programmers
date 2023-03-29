function solution(common) {
  const sub = common[1] - common[0];
  const operator = common[1] + sub === common[2] ? '+' : '*';
  const operatorNumber = operator === '+' ? sub : common[1] / common[0];

  return Function(
    'return ' + common.at(-1) + operator + String(operatorNumber)
  )();
}
