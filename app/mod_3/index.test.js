var mult = require('./index');

test('3 * 1 = 3', function() {
  expect(mult(3, 1)).toBe(3);
});

test('2 * 1 = 0', function() {
  expect(mult(2, 1)).toBe(2);
});

test('5 * 0 = 0', function() {
  expect(mult(5, 0)).toBe(0);
});