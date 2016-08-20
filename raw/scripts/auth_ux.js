var Instruct = {
	UX: {
		populateUserDetails: function(name, img){
			$('.username').each(function(){ $(this).text(name) });
			$('.userimg').each(function(){ $(this).attr('src', img) });
		},
		newElement: function(el, className, id) {
			el = el || null;
			className = className || null;
			id = id || null;

			if (el == null)
				return false;
			if (/#/.test(id)) {
				className = id;
				id = null;
			}

			if (el == 'img' || el == 'br' || el == 'hr')
				var element = $('<' + el + '>');
			else
				var element = $('<' + el + '></' + el + '>');

			if (className != null)
				$(element).attr('class', className.replace(/\./g, ''));
			if (id != null)
				$(element).attr('id', id.replace(/#/, ''));

			return element;
		}
	}
};

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