function greet(message) {
  if (!message) {
    return 'You are anonymous!';
  } else {
    return `Hello, ${message}!!`;
  }
}

console.log('hoge');

module.exports = greet;
