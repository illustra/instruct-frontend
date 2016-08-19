$(document).ready(function(){
	$('nav .left a').each(function(el){
		$(el).click(function(e){
			e.preventDefault();

			var targetScreen = $(this).attr('data-target');
			$('#app > div').each(function(scr){ $(scr).removeClass('active') });
			$('#'+targetScreen).addClass('active');
		});
	});
});