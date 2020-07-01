var sub = require('./index');

test('3 - 1 = 2', function() {
  expect(sub(3, 1)).toBe(2);
});

test('2 - 2 = 0', function() {
  expect(sub(2, 2)).toBe(0);
});

test('2 - (-2) = 4', function() {
  expect(sub(2, -2)).toBe(4);
});

