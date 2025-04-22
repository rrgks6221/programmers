function solution(my_string) {
  const ASCII_UPPER_START_INDEX = 65;
  const ASCII_LOWER_START_INDEX = 97;
  const alphaCountList = Array.from({ length: 52 }, () => 0);

  for (let i = 0; i < my_string.length; i += 1) {
    const asciiCode = my_string[i].charCodeAt();
    const isUpper = asciiCode < ASCII_LOWER_START_INDEX;
    const listIndex =
      asciiCode -
      (isUpper ? ASCII_UPPER_START_INDEX : ASCII_LOWER_START_INDEX - 26);

    alphaCountList[listIndex] += 1;
  }

  return alphaCountList;
}
