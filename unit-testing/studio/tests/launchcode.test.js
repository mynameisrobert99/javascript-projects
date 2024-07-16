// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  
  // Write your unit tests here!
  test("organization should be 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
});

test("executiveProducer should be 'jeff'", function() {
  expect(launchcode.executiveDirector).toBe("Jeff");
});  

test("percentageCoolEmployees should be '100'", function() {
  expect(launchcode.percentageCoolEmployees).toBe(100)
})