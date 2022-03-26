function solution(s) {
  if (s.length % 2 === 1) return 0;

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}
