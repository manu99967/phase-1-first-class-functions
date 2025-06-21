// Already defined functions (keep these if already present)
const divide = function () {
  return 2000 / 100;
};

const square = (x) => x * x;

const add = (a, b) => a + b;

// New function: receivesAFunction
function receivesAFunction(callback) {
  return callback();
}

// New function: returnsANamedFunction
function returnsANamedFunction() {
  return function namedFunction() {
    return "I am a named function";
  };
}

// New function: returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  return function () {
    return "I am an anonymous function";
  };
}

// Export everything
module.exports = {
  divide,
  square,
  add,
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
