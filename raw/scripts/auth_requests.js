$(document).ready(function(){
	// Populate user details - guest for now
	var username = 'Guest', userImg = 'img/person.png';
	Instruct.UX.populateUserDetails(username, userImg);

	// Populate home - dummy data for now
	var content = [
		{
			'title': 'current subjects',
			'cards': [
				{
					'subject': ['Precalc', '2teo18UJG48KQ5MFWSnoY0Rn6mXC0qnp'],
					'mentor': ['Mrs. H', 'wSLtvz8fqVxarW0vsDXn9RlzA'],
					'progress': '37',
					'record': '27h',
					'img': 'img/person.png'
				},
				{
					'subject': ['PH Constitution', 'MYsI6Hd8tYQn7UgJq6NRqo25GrISuRgt'],
					'mentor': ['Mr. D', 'I42gzYJXfxZpmRxUOhDyizb6y'],
					'progress': '84',
					'record': '5h',
					'img': 'img/person.png'
				}
			]
		}
	];
	Instruct.Home.populate(content, userImg, function(){
		Instruct.UX.populateUserDetails(username, userImg);
	});
});

Instruct.Request = function(url, query) {
	return [];
}