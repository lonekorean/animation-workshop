$(function() {
	$('button').on('click', doBusyWork);

	function doBusyWork() {
		var endTime = Date.now() + 6 * 1000;
		while (Date.now() < endTime) {
			// churn
		}
	}
});
