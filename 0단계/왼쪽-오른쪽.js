function solution(str_list) {
  const lIndex = str_list.findIndex((el) => el === 'l');
  const rIndex = str_list.findIndex((el) => el === 'r');

  if (lIndex === -1 && rIndex === -1) {
    return [];
  }

  if (lIndex === -1) {
    return str_list.slice(rIndex + 1);
  }

  if (rIndex === -1) {
    return str_list.slice(0, lIndex);
  }

  if (lIndex < rIndex) {
    return str_list.slice(0, lIndex);
  }

  if (rIndex < lIndex) {
    return str_list.slice(rIndex + 1);
  }
}
