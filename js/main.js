$('.skills-content').hide();
$('.exp-content').hide();

$('.one').addClass('bgactive');
$('.one div').addClass('mini-1-box bgactive');


$('.two').click(function(){
	$('.skills-content').show();
	$('.exp-content').hide();
	$('.about-content').hide();

	$('.one').removeClass('bgactive');
	$('.one div').removeClass('mini-1-box bgactive');

	$('.two').addClass('bgactive');
	$('.two div').addClass('mini-1-box bgactive');

	$('.three').removeClass('bgactive');
	$('.three div').removeClass('mini-1-box bgactive');

});

$('.three').click(function(){
	$('.skills-content').hide();
	$('.exp-content').show();
	$('.about-content').hide();

	$('.one').removeClass('bgactive');
	$('.one div').removeClass('mini-1-box bgactive');

	$('.two').removeClass('bgactive');
	$('.two div').removeClass('mini-1-box bgactive');

	$('.three').addClass('bgactive');
	$('.three div').addClass('mini-1-box bgactive');

});


$('.one').click(function(){
	$('.skills-content').hide();
	$('.exp-content').hide();
	$('.about-content').show();

	$('.one').addClass('bgactive');
	$('.one div').addClass('mini-1-box bgactive');

	$('.two').removeClass('bgactive');
	$('.two div').removeClass('mini-1-box bgactive');

	$('.three').removeClass('bgactive');
	$('.three div').removeClass('mini-1-box bgactive');

});