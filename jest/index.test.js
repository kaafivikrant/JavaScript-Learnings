const getTodo = require('./index');

test('getTodo() should return a promise', () => {
  expect(getTodo()).toBeInstanceOf(Promise);
});