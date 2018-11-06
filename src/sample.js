function greet(message) {
  if (!message) {
    return 'You are anonymous!';
  } else {
    return `Hello, ${message}!!`;
  }
}

console.log('hoge');
console.warn('precommit hooks test');

module.exports = greet;
