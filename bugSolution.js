function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    // Return a default value or handle the error gracefully
    return 0; // Or throw a custom error with more context
    // throw new Error('Division by zero attempted. Please check inputs.');
  }
  return a / b;
}

module.exports = {
add, subtract, multiply, divide,
};