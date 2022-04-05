function solution(msg) {
  const result = [];
  const dictionary = [0];

  for (let i = 65; i < 91; i += 1) dictionary.push(String.fromCharCode(i));

  for (let i = 0; i < msg.length; i += 1) {
    for (let j = msg.length - 1; j >= i; j -= 1) {
      const str = msg.slice(i, j + 1);
      const idx = dictionary.indexOf(str);

      if (idx !== -1) {
        result.push(idx);
        dictionary.push(str + msg[j + 1]);
        i += str.length - 1;
        break;
      }
    }
  }

  return result;
}
