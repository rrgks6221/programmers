function solution(nums) {
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              let count = 0
              let temp = nums[i] + nums[j] + nums[k];
              if (temp % 2 !== 0) {
                  for (let x = 3; x <= temp / 2; x += 2) {
                      if (temp % x === 0) {
                          count++;
                      }
                  }
                  if (!count) result++;
              }
          }
      }
  }
  return result;
}