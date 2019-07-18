'use strict';

var self = this,
	endDate = 'December 14, 2018, 08:00';

this.init = function() {
	this.refreshAndDisplay();
};

// contador Festa
this.refreshAndDisplay = function() {
	var $countdown = $('.contador'),
		$days = $countdown.find('.days'),
		$hours = $countdown.find('.hours'),
		$minutes = $countdown.find('.minutes'),
		$seconds = $countdown.find('.seconds'),
		timeRemaining = self.calculate(endDate);

	$days.find('span').text(timeRemaining.days);
	$hours.find('span').text(timeRemaining.hours);
	$minutes.find('span').text(timeRemaining.minutes);
	$seconds.find('span').text(timeRemaining.seconds);


	// valida se for menor que '10' acrescenta o '0' a esquerda no tempo
	$days.find('span').text() < 10 === true ? $('.days').html('<span>' + 0 + timeRemaining.days + '</span>') : '';
	$hours.find('span').text() < 10 === true ? $('.hours').html('<span>' + 0 + timeRemaining.hours + '</span>') : '';
	$minutes.find('span').text() < 10 === true ? $('.minutes').html('<span>' + 0 + timeRemaining.minutes + '</span>') : '';
	$seconds.find('span').text() < 10 === true ? $('.seconds').html('<span>' + 0 + timeRemaining.seconds + '</span>') : '';

	if ($('.hours').text() == 0 && $('.minutes').text() == 0) {
		$('#contador, .image-mobile').hide();
		$('#bg-end, .image-mobile').show();
		$('body').addClass('go-party');
	} else {
		$('body').removeClass('go-party');
	}

	setTimeout(self.refreshAndDisplay, 1000);
};

this.calculate = function(endDate) {
	var today = Date.parse(new Date()),
		finalDate = Date.parse(endDate),
		total = finalDate - today,
		seconds = Math.floor( (total/1000) % 60 ),
		minutes = Math.floor( (total/(1000*60)) % 60 ),
		hours = Math.floor( (total/(1000*60*60)) % 24 ),
		days = Math.floor( (total/(1000*60*60*24)) ),
		timeRemaining = {
			'days': days >= 0 ? days : 0,
			'hours': hours >= 0 ? hours : 0,
			'minutes': minutes >= 0 ? minutes : 0,
			'seconds': seconds >= 0 ? seconds : 0
		};
	return timeRemaining;
};

this.init();