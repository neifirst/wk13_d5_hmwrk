var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  // test for can add
  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  // - calculator.subtract()
  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })



  // - calculator.multiply()
  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(100, calculator.runningTotal);
  })

  // - calculator.divide()
  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })

  // - calculator.numberClick()
  it('can enter number', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    assert.equal(20, calculator.runningTotal);
  })

  // - calculator.operatorClick()
  it('can use operator', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    assert.equal(5, calculator.runningTotal);
  })

  // - calculator.clearClick()
  it('can clear', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
