$(function() {
	$('button').on('click', doBusyWork);

	function doBusyWork() {
		var endTime = Date.now() + 10 * 1000;
		while (Date.now() < endTime) {
			// churn
		}
	}
});
