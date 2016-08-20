Instruct.Request = {
	open: function(url, query){
		return;
	},
	selfStats: function(){
		// Dummy data for now
		return [
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
	},
	selfProfile: function(){
		// In a real environment, we Instruct.Request() the user
		// details.
		// For now we just give dummy details.
		return {
			username: 'jdcruz',
			fullname: 'Juan dela Cruz',
			img: 'img/person.png',
			address: 'sa puso mo xD',
			gender: 'Male'
		}
	} 
}