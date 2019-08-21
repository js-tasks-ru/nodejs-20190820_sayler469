function sum(a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    return a + b;
  } else {
    throw new TypeError('Должны быть только числа');
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = sum;
