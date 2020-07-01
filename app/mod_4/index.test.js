var div = require('./index');

test('3 / 1 = 3', function() {
  expect(div(3, 1)).toBe(3);
});

test('2 / 1 = 0', function() {
  expect(div(2, 1)).toBe(2);
});

test('5 / 0 = 0', function() {
  expect(div(5, 0)).toBe(Infinity);
});

