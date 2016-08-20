// todo
Instruct.Search = {
	query: function(query) {
		// In a real environment, we would Instruct.Request.open()
		// to get search results, but for now we return nothing.
		this.displayResults([
			{
				'title': 'No results found',
				'snippet': 'No results found'
			}
		]);
		return;
	},
	displayResults: function(results){
		for (var i = 0; i < results.length; i++) {
			var result = results[i],
				searchResult = $('<div></div>').addClass('card card-12'),
				resultContent = $('<div></div>').addClass('search-result'),
				resultTitle = $('<h2></h2>').text(result.title),
				resultSnippet = $('<p></p>').text(result.snippet);
			$(resultContent).append(resultTitle).append(resultSnippet);
			$(searchResult).append(resultContent);
			$('#search-results').append(searchResult);
		}

		return;
	},
	loadSubject: function(subjectId){
		return;
	},
	loadTutor: function(tutorId){
		return;
	}
}