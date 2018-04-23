var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  //   - Do the number buttons work to update the display of the running total?
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });


  //   - Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should have a working + operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })

  it('should have a working - operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('should have a working * operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('42');
  })

  it('should have a working / operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })


//   - Can we chain multiple operations together?
it('should effectively chain different operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('15');
})

//   - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
it('should work as expected for positives', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('20');
})

it('should work as expected for negatives', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-10');
})

it('should work as expected for decimals', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5.4');
})

it('should work as expected for very large numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('499999995');
})



// What does the code do in exceptional circumstances?
//
//   - If you divide by zero, what is the effect?
//   - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
it('should appropriately handle / by 0', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('ERROR');
})


});
