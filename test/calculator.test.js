'use strict';

/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function () {

    // API for interacting with the page.
    var controls = {
        get result() {
            return document.getElementById('result').innerHTML;
        },
        get x() {
            return document.getElementById('x').value;
        },
        set x(val) {
            document.getElementById('x').value = val;
        },
        get y() {
            return document.getElementById('y').value;
        },
        set y(val) {
            document.getElementById('y').value = val;
        },
        clickAdd: function () {
            document.getElementById('add').click();
        },
        clickMinus: function () {
            document.getElementById('minus').click();
        },
        clickMultiply: function () {
            document.getElementById('multiply').click();
        },
        clickCommaSeparate: function () {
            document.getElementById('comma-separate').click();
        },
        clickPower: function () {
            document.getElementById('power').click();
        }
    ,
    clickDivide: function() {
      document.getElementById('divide').click();
    }
    };

    // inject the HTML fixture for the tests
    beforeEach(function () {
        // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
        fixture.base = 'test';
        fixture.load('calculator.fixture.html');

        // init js lib
        window.calculator.init();
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        fixture.cleanup();
    });

    it('should calculate 3 for 1 + 2', function () {
        controls.x = 1;
        controls.y = 2;
        controls.clickAdd();
        controls.result.should.equal('3');
    });

    it('should calculate 10 for 5 * 2', function () {
        controls.x = 5;
        controls.y = 2;
        controls.clickMultiply();
        controls.result.should.equal('10');
  });

  it('should calculate 5 for 10 / 2', function() {
    controls.x = 10;
    controls.y = 2;
    controls.clickDivide();
    controls.result.should.equal('5');
    });

    it('should calculate zero for invalid x value', function () {
        controls.x = 'hello';
        controls.y = 2;
        controls.clickAdd();
        controls.result.should.equal('0');
    });

    it('should calculate zero for invalid y value', function () {
        controls.x = 1;
        controls.y = 'goodbye';
        controls.clickAdd();
        controls.result.should.equal('0');
    });

    it('should calculate 3 for 5 - 2', function () {
        controls.x = 5;
        controls.y = 2;
        controls.clickMinus();
        controls.result.should.equal('3');
    })

    it('should comma separate 3 and 5 to 3,5', function () {
        controls.x = 3;
        controls.y = 5;
        controls.clickCommaSeparate();
        controls.result.should.equal('3,5');
    })

    it('should calculate 2 to power 3 = 8', function () {
        controls.x = 2;
        controls.y = 3;
        controls.clickPower();
        controls.result.should.equal('8');
    })

});