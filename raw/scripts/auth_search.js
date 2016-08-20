$(document).ready(function(){
	var searchRequestTimeout = null;
	$('nav a[title=Search]').click(function(){
		$('#search input').focus().on("change keyup paste click", function(){
			window.clearTimeout(searchRequestTimeout);

			var query = $(this).val();
			if (query)
				$('#search h1').text('No results for ' + query);
			else
				$('#search h1').text('Start typing your query.');

			// In a real environment we would send GET requests here.
			// Start requesting data after user has stopped typing.
			searchRequestTimeout = window.setTimeout(function(){
				console.log('Server data requested');

				Instruct.Search.query(null);
			}, 750);
		});
	});
});

// todo
Instruct.Search = {
	query: function(query) {
		return;
	},
	display: function(results){
		return;
	},
	loadSubject: function(subjectId){
		return;
	},
	loadTutor: function(tutorId){
		return;
	}
}