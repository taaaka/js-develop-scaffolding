function greet(message) {
  if (!message) {
    return 'You are anonymous!';
  } else {
    return `Hello, ${message}!!`;
  }
}

const name = 'abc';

console.log(greet(name));

console.warn('precommit hooks test');

module.exports = greet;
