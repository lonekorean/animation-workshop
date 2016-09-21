var $pond, pondWidth, pondHeight;

$(function() {
	var approach, isStaggered, $pond, pondWidth, pondHeight;
	init();

	function init() {
		approach = getParam('approach');
		isStaggered = getParam('stagger') === 'true';

		// setup pond
		$pond = $('.pond');
		$pond.addClass(approach + '-approach');
		if(getParam('will-change') === 'true') {
			$pond.addClass('will-change');
		}
		determinePondSize();
		$(window).on('resize', determinePondSize);

		// display count
		var count = getParam('count');
		$('h1').text(count + ' fish');

		// dump fish in
		for (var i = 0; i < count; i++) {
			spawnFish();
		}
	}

	function getParam(key) {
		var matches = location.search.match(new RegExp(key + '=([^&]+)'));
		return matches ? matches[1] : undefined;
	}

	function determinePondSize() {
		pondWidth = $pond.width();
		pondHeight = $pond.height();
	}

	function spawnFish() {
		// setup fish
		var $fish = $('<div>', { class: 'fish' });
		var num = getRandom(4) + 1;
		$fish.addClass('fish-' + num);
		positionFish($fish, -40, pondHeight / 2);

		// let fish go
		$pond.append($fish);
		var delay = isStaggered ? getRandom(5000) : 0;
		setTimeout(moveFish.bind(this, $fish), delay);
	}

	function moveFish($fish) {
		positionFish($fish, getRandom(pondWidth), getRandom(pondHeight));

		// let fish chill for 2 seconds for non-staggered demo
		var delay = isStaggered ? 5000 : 7000;
		setTimeout(moveFish.bind(this, $fish), delay);
	}

	function positionFish($fish, x, y) {
		switch (approach) {
			case 'bad':
				$fish.css({ 'left': x + 'px', 'top': y + 'px' });
				break;
			case 'good':
				$fish.css('transform', 'translate(' + x + 'px, ' + y + 'px)');
				break;
		}
	}

	function getRandom(upper) {
		return Math.floor(Math.random() * upper);
	}
});
