var $pond, pondWidth, pondHeight;

$(function() {
	var $pond;
	init();

	function init() {
		var approach = getParam('approach');

		// setup pond
		$pond = $('.pond');
		$pond.addClass(approach + '-approach');
		if(getParam('will-change') === 'true') {
			$pond.addClass('will-change');
		}

		// display count
		var count = getParam('count');
		$('h1').text(count + ' fish');

		// dump fish in
		spawnFish(count);

		$(window).on('resize', reload);
	}

	function reload() {
		window.location.reload();
	}

	function getParam(key) {
		var matches = location.search.match(new RegExp(key + '=([^&]+)'));
		return matches ? matches[1] : undefined;
	}

	function spawnFish(count) {
		var pondWidth = $pond.width();
		var pondHeight = $pond.height();

		var $fishAnchors = [];
		for (var i = 0; i < count; i++) {
			// setup fish
			var $fish = $('<div>', { class: 'fish' });
			var num = getRandom(4) + 1;
			$fish.addClass('fish-' + num);
			$fish.css('animation-delay', -getRandom(8000) + 'ms');

			// position fish
			var $fishAnchor = $('<div>', { class: 'fish-anchor' });
			$fishAnchor.css({
				left: getRandom(pondWidth),
				top: getRandom(pondHeight)
			});
			$fishAnchor.append($fish);
			$fishAnchors.push($fishAnchor);
		}

		// add them all at once to minimize DOM thrashing
		$pond.append($fishAnchors);
	}

	function getRandom(upper) {
		return Math.floor(Math.random() * upper);
	}
});
