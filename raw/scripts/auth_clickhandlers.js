$(document).ready(function(){
	$('nav .left a').each(function(){
		$(this).click(function(e){
			e.preventDefault();

			var targetScreen = $(this).attr('data-target');
			if (!targetScreen)
				return;
			
			$('#app > div').each(function(){ $(this).removeClass('active') });
			$('nav .left li').each(function(){ $(this).removeClass('active') });
			$('#'+targetScreen).addClass('active');
			$(this).children().addClass('active');
		});
	});

	$('nav .right h4').mouseenter(function(){
		$('.dropdown').slideDown();
	});
	$('.dropdown').mouseleave(function(){
		$('.dropdown').slideUp();
	})
});