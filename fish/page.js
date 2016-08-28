var STARTING_FISH_COUNT = 200;
var $pond, pondWidth, pondHeight;

$(function() {
	// setup pond
	$pond = $('.pond');
	determinePondSize();
	$(window).on('resize', determinePondSize);

	// dump fish in
	for (var i = 0; i < STARTING_FISH_COUNT; i++) {
		spawnFish();
	}
});

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
	$fish
		//.css('transform', 'translate(' + x + 'px, ' + y + 'px)');
		.css({ 'left': x + 'px', 'top': y + 'px' });
}

function getRandom(upper) {
	return Math.floor(Math.random() * upper);
}
