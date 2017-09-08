'use strict';

window.calculator = (function() {

    return {
        init: init
    }

	function getIntById(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	function add() {
		var sum = getIntById('x') + getIntById('y');
        document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};


    function minus() {
        var minusResult = getIntById('x') - getIntById('y');
        document.getElementById('result').innerHTML = isNaN(minusResult) ? 0 : minusResult;
    }

	function init() {
		document.getElementById('multiply').addEventListener('click', multiply);
		document.getElementById('add').addEventListener('click', add);
        document.getElementById('minus').addEventListener('click', minus);
		document.getElementById('multiply').addEventListener('click', multiply);
		document.getElementById('power').addEventListener('click', power);
	};

	function multiply() {
		var product = getIntById('x') * getIntById('y');
		document.getElementById('result').innerHTML = isNaN(product) ? 0 : product;
	};

	function power() {
		var power = Math.pow(getIntById('x'), getIntById('y'));
		document.getElementById('result').innerHTML = isNaN(power) ? 0 : power;
	};
})();
