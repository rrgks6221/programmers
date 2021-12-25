function solution(s) {
  if (s.length % 2 === 1) return 0;

  const stackMatch = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const queMatch = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const str = s.split('');
  let result = 0;

  str.forEach((el, idx) => {
    str.push(str.shift());

    const stack = [];
    const que = [...str];

    while (que.length > 0) {
      if (
        stackMatch[stack[stack.length - 1]] &&
        stack[stack.length - 1] === queMatch[que[0]]
      ) {
        stack.pop();
        que.shift();
      } else {
        stack.push(que.shift());
      }
    }

    if (stack.length === 0) result += 1;
  });

  return result;
}
