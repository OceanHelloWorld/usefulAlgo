function decodeString(str) {
  // if not all brackets match, return false;
  let result = '';
  let countStack = [];
  let resStack = [];
  let idx = 0;
  let nums = '0123456789';
  while (idx < str.length) {
    // if number, push to countStack
    if (nums.includes(str[idx])) {
      let count = 0;
      while(nums.includes(str[idx])) {
        count = 10 * count + (1 * str[idx++]);
      }
      countStack.push(count);
    // if open bracket, push result to resStack, clear result
    } else if (str[idx] === '[') {
      resStack.push(result);
      result = '';
      idx++;
    // if close bracket, take out from resStack and countStack 
    } else if (str[idx] === ']') {
      let temp = resStack.pop();
      let repeatTimes = countStack.pop();
      for (let i = 0; i < repeatTimes; i++) {
        temp += result;
      }
      result = temp;
      idx++;
    } else {
      // all alphabetically letters, add to result
      result += str[idx++];
    }
    console.log(result);
  }
  return result;
}

// console.log(decodeString('a') === 'a');
// console.log(decodeString('3[a]') === 'aaa');
// console.log(decodeString('2[a2[bc]d]e') === 'abcbcdabcbcde');
// console.log(decodeString('1[]') === '');
// console.log(decodeString('0[abc]') === '');
console.log(decodeString('2[a2[bc]d]e'));

