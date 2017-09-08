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

	function init() {
		document.getElementById('add').addEventListener('click', add);
		document.getElementById('multiply').addEventListener('click', multiply);
	};

	function multiply() {
		var product = getIntById('x') * getIntById('y');
		document.getElementById('result').innerHTML = isNaN(product) ? 0 : product;
	};

})();
