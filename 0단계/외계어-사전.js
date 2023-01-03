function solution(spell, dic) {
  return dic.some((word) => {
    return spell.every((s) => {
      return new RegExp(s).test(word);
    });
  })
    ? 1
    : 2;
}
