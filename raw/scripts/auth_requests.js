$(document).ready(function(){
	// Populate username - guest for now
	populateUsernames('Guest');

	// Populate home - dummy data for now
	var cards = [
		{
			'subject': 'Precalc',
			'mentor': 'Mrs. H',
			'progress': '37',
			'record': '27h'
		},
		{
			'subject': 'Phil. Const.',
			'mentor': 'Mr. D',
			'progress': '84',
			'record': '5h'
		}
	];
	//populateHomeCards(cards);
});

var populateUsernames = function(name){
	$('.username').each(function(){ $(this).text(name) });
}