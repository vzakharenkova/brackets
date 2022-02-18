module.exports = function check(str, bracketsConfig) {
  let obj = {};
  bracketsConfig.forEach((el) => {
    obj[el[0]] = el[1];
  })
  let stack = [];
  for (let i = 0; i < str.length; i++) {
      let x = str[i];
      if (x === obj[x]) {
        if (stack[stack.length - 1] === x) {
          stack.pop();
        } else {
          stack.push(obj[x]);
        } continue;
      }
      if (obj[x]) {
          stack.push(obj[x]);
      } else {
      if (x !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
