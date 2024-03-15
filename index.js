function receivesAFunction(callback) {
  console.log("Doing something...");
  callback(); // executing the callback function
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am the named function!");
  }

  // Return the named function
  return namedFunction;
}

// Call the returnsANamedFunction to get the named function
const myFunction = returnsANamedFunction();

// Call the returned named function
myFunction(); // Output: "I am the named function!"

function returnsAnAnonymousFunction() {
  return function() {
    // code for the anonymous function
  };
}

// Call the returnsAnAnonymousFunction function
returnsAnAnonymousFunction();

// Your test code goes here
describe('Test Suite', () => {
  before(() => {
    // Call the returnsAnAnonymousFunction function
    const anonymousFunc = returnsAnAnonymousFunction();
    // Perform any setup or initialization needed for your tests
  });

  it('should test something', () => {
    // Perform your test assertions
  });
});
  