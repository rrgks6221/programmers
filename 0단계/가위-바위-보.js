function solution(rsp) {
  const rspWinMap = {
    2: '0',
    0: '5',
    5: '2',
  };

  return rsp.replace(/[0-9]/g, (el) => {
    return rspWinMap[el];
  });
}
