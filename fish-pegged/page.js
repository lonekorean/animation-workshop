$(function() {
	$('button').on('click', doBusyWork);

	function doBusyWork() {
		endTime = Date.now() + 6 * 1000;
		while (Date.now() < endTime) {
			// (>'-')> <('-'<) ^(' - ')^ <('-'<) (>'-')>
		}
	}
});
