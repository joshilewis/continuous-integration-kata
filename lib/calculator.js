'use strict';

window.calculator = (function() {

    return {
        init: init
    }

	function getIntById(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	function calculate() {
		var sum = getIntById('x') + getIntById('y');
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};

	function divide(){
		var val = getIntById('x') / getIntById('y');
		document.getElementById('result').innerHTML = isNaN(val) ? 0 : val;
	}

	function init() {
		document.getElementById('add').addEventListener('click', calculate);
		document.getElementById('divide').addEventListener('click', divide);
	};

})();
