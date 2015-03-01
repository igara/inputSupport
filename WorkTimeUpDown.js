/**
 * キーバインドで工数を入力
 * 対応ボタン:↑ ↓
 */

document.onkeydown = function(event) {
    var keyEvent = event || window.event;
	if (keyEvent.keyCode == 38) {
		workTimeIncrement(getWorkTimeId());
	} else if (keyEvent.keyCode == 40) {
		workTimeDecrement(getWorkTimeId());
	}
}

/**
 * 工数丸め処理
 * @param workTime 
 * @return 工数を0.25で除算の商に0.25を乗算する
 */
function mathRoundWorkTime(workTime) {
	return Math.round(workTime / 0.25) * 0.25;
}

/**
 * 工数部分の要素を取得する
 * valueが設定されていない時の考慮あり
 */
function getWorkTimeId() {
	if (String(document.activeElement.id).match(/^new_time_entry_\d*_\d*_hours/)) {
		var getElementId = document.getElementById(document.activeElement.id);
		if (getElementId.value == "") {
			getElementId.value = 0;
		}
		return getElementId;
	}
}

/**
 * 工数を0.25ずつ加算
 */
function workTimeIncrement(workTime) {
	if (workTime.value >= 24) {
		alert("1日何時間？");
	} else if (workTime.value <= 24 && workTime.value % 0.25 == 0) {
		workTime.value = parseFloat(workTime.value) + parseFloat(0.25);
	} else if (workTime.value <= 24 && workTime.value % 0.25 != 0) {
		workTime.value = mathRoundWorkTime(workTime.value);
	}
}

/**
 * 工数を0.25ずつ減算
 */
function workTimeDecrement(workTime) {
	if (workTime.value <= 0) {
		alert("0より小さい");
	} else if (workTime.value >= 0 && workTime.value % 0.25 == 0) {
		workTime.value = parseFloat(workTime.value) - parseFloat(0.25);
	} else if (workTime.value >= 0 && workTime.value % 0.25 != 0) {
		workTime.value = mathRoundWorkTime(workTime.value);
	}
}