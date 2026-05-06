function addZero(value) {
	return value < 10 ? "0" + value : value;
}

function updateClock() {
	var clock = document.getElementById("clock");
	var date = new Date();
	var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());

	if (clock) {
		clock.textContent = time;
	}
}

function loadStates() {
	var select = document.getElementById("state-select");

	if (!select) {
		return;
	}

	fetch("data/data.json")
		.then(function(response) {
			if (!response.ok) {
				throw new Error("Unable to load state data");
			}
			return response.json();
		})
		.then(function(data) {
			var states = data.states || [];

			states.forEach(function(state) {
				var option = document.createElement("option");
				option.value = state.code;
				option.textContent = state.st_name;
				select.appendChild(option);
			});
		})
		.catch(function() {
			select.disabled = true;
		});
}

updateClock();
setInterval(updateClock, 1000);
loadStates();
