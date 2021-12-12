function solution(phone_number) {
  let result = '';
  for (let i = 0; i < phone_number.length - 4; i++) result += '*';
  for (let i = phone_number.length - 4; i < phone_number.length; i++)
    result += phone_number[i];
  return result;
}
