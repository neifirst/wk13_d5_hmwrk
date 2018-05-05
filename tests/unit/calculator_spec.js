var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })


  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  })


  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(100, calculator.runningTotal);
  })


  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })


  it('can enter number', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    assert.equal(20, calculator.runningTotal);
  })


  it('can use operator', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    assert.equal(5, calculator.runningTotal);
  })


  it('can clear', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
