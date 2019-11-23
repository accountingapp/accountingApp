/* 
  Use this to debounce any function you want
  See AddAccounts.js handleHover function for sample use
*/
const debounce = (func, time) => {
  return args => {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= time) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => func(args), time);
  };
};

// Add any other utility functions youd like following example above.

module.exports = { debounce };
