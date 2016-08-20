Instruct.UX = {
	populateUserDetails: function(){
		var details = Instruct.Request.selfProfile();
		$('.username').each(function(){ $(this).text(details.username) });
		$('.userimg').each(function(){ $(this).attr('src', details.img) });
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
	},
	createDivider: function(width, text) {
		var El = this.newElement,
			divider = El('div', '.card .card-' + width + ' .divider'),
			dividerContent = El('div', '.divider-content'),
			dividerText = El('h4');
		$(dividerText).text(text);
		$(dividerContent).append(dividerText);
		$(divider).append(dividerContent);
		return divider;
	},
	createCard: function(width, header, body) {
		var El = this.newElement,
			card = El('div', '.card .card-' + width),
			cardContent = El('div', '.card-content');
		$(header).addClass('card-header');
		$(body).addClass('card-body');
		$(cardContent).append(header).append(body);
		$(card).append(cardContent);
		return card;
	},
	navigate: function(page){
		$('#app > div').each(function(){ $(this).removeClass('active') });
		$('nav .left li').each(function(){ $(this).removeClass('active') });
		$('#'+page).addClass('active');
		$('nav .left li[data-target=' + page + ']').addClass('active');
	}
}

$(document).ready(function(){
	$('nav .left a').each(function(){
		$(this).click(function(e){
			//e.preventDefault();

			var targetScreen = $(this).children().attr('data-target');
			if (!targetScreen)
				return;
			
			Instruct.UX.navigate(targetScreen);
		});
	});

	$('nav .right h4').mouseenter(function(){
		$('.dropdown').slideDown();
	});
	$('.dropdown').mouseleave(function(){
		$('.dropdown').slideUp();
	});

	// Populate user details
	Instruct.UX.populateUserDetails();
	Instruct.Profile.populate();

	// Populate home
	Instruct.Home.populate(Instruct.UX.populateUserDetails);

	// Navigate to URL
	var page = window.location.href.split('#')[1];
	if (page)
		Instruct.UX.navigate(page);

	// Listen for searchbox
	var searchRequest = null, oldQuery = '';
	$('#search input').focus().on("change keyup paste click", function(){
		window.clearTimeout(searchRequest);

		var query = $(this).val();
		if (query) {
			$('#search h1').html('Results for <strong>' + query + '</strong>');
			if (query != oldQuery) {
				$('#search-results').empty();

				// In a real environment we would send GET requests here.
				// Start requesting data after user has stopped typing.
				searchRequest = window.setTimeout(function(){
					Instruct.Search.query(query);
				}, 750);
			}
		} else
			$('#search h1').text('Start typing your query.');

		oldQuery = query;
	});
});