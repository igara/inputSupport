function isEmpty(val) {
	return !val ? !(val === 0|| val === false) ? true : false : false;
}

function mathRoundWorkTime(workTime) {
	return Math.round(workTime / 0.25) * 0.25;
}

function checkEmptyWorkTime(workTime) {
	if (isEmpty(workTime)) {
		document.i1.i2.value = 0;
	}
}

document.onkeydown = function(event) {
    var keyEvent = event || window.event;
	if (keyEvent.keyCode == 38) {
		count1();
	} else if (keyEvent.keyCode == 40) {
		count2();
	}
}

function count1() {
	var formName = document.activeElement.name;
	checkEmptyWorkTime(document.i1.elements[formName].value);
	if (document.i1.elements[formName].value >= 24) {
		alert("一日何時間？");
	} else if (document.i1.elements[formName].value <= 24 && document.i1.elements[formName].value % 0.25 == 0) {
	    document.i1.elements[formName].value = eval(document.i1.elements[formName].value) + eval(0.25);
	} else {
		document.i1.elements[formName].value = mathRoundWorkTime(document.i1.elements[formName].value);
	}
}

function count2() {
	var formName = document.activeElement.name;
	checkEmptyWorkTime(document.i1.elements[formName].value);
	if (document.i1.elements[formName].value <= 0) {
		alert("0より小さい");
	} else if (document.i1.elements[formName].value >= 0 && document.i1.elements[formName].value % 0.25 == 0) {
	    document.i1.elements[formName].value = eval(document.i1.elements[formName].value) - eval(0.25);
	} else {
		document.i1.elements[formName].value = mathRoundWorkTime(document.i1.elements[formName].value);
	}
}