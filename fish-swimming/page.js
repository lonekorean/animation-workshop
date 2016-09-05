var $pond, pondWidth, pondHeight;

$(function() {
	var approach, willchange, $pond, pondWidth, pondHeight;
	init();

	function init() {
		approach = getParam('approach');

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
		setTimeout(moveFish.bind(this, $fish), getRandom(6000));
	}

	function moveFish($fish) {
		positionFish($fish,  getRandom(pondWidth),  getRandom(pondHeight));
		setTimeout(moveFish.bind(this, $fish), 7000);
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
