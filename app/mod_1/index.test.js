var add = require('./index');

test('2 + 3 = 5', function() {
  expect(add(2, 3)).toBe(5);
});

test('2 + 4 = 6', function() {
  expect(add(2, 4)).toBe(6);
});

test('1 + 2 = 3', function() {
  expect(add(1, 2)).toBe(3);
});

