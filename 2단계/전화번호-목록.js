function solution(phone_book) {
  const obj = phone_book.reduce((acc, cur) => {
    acc[cur] = cur;

    return acc;
  }, {});

  return !phone_book.some((phoneNum) => {
    for (let i = 1; i < phoneNum.length + 1; i += 1) {
      const key = phoneNum.slice(0, i);

      if (obj.hasOwnProperty(key) && key !== phoneNum) {
        return true;
      }
    }
  });
}
