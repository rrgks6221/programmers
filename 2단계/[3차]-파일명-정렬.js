function solution(files) {
  return files
    .map((file) => {
      let head = '';
      let number = '';
      let idx = 0;

      for (let i = 0; i < file.length; i += 1) {
        if (/\d/.test(file[i])) {
          idx = i;
          break;
        }

        head += file[i];
      }
      for (let i = idx; i < file.length; i += 1) {
        if (!/\d/.test(file[i]) || number.length > 5) {
          return [head, number, file.slice(i)];
        }

        number += file[i];
      }

      return [head, number, ''];
    })
    .sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      return Number(a[1]) - Number(b[1]);
    })
    .map((file) => file.join(''));
}
