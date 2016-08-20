Instruct.Profile = {
	populate: function(){
		var profile = Instruct.Request.selfProfile(),
			stats = Instruct.Request.selfStats();

		// Display academic details
		var subjects = stats[0].cards;
		for (var i = 0; i < subjects.length; i++) {
			var link = $('<a></a>'), subject = subjects[i],
				title = subject.subject[0];
			if ((i + 1) < subjects.length)
				title += ', ';

			$(link).attr('href', '#search')
				   .attr('data-url', 's=' + subject.subject[1])
				   .text(title);
			$('#p_subs').append(link);
		}

		// Display profile details
		$('.profile-header h3').text(profile.fullname);
	},
	update: function(){
		return;
	}
};