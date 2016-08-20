Instruct.Home = {
	populate: function(done) {
		var ux = Instruct.UX, that = this,
			data = Instruct.Request.selfStats(),
			userImg = Instruct.Request.selfProfile().img;

		// Section cards
		var section = data[0],
			sectionTitle = section.title,
			cards = section.cards,
			sectionEl = ux.newElement('section');
		$(sectionEl).append(ux.createDivider(12, sectionTitle));
		for (var i = 0; i < cards.length; i++) {
			var card = cards[i];
			$(sectionEl).append(that.createSubjectCard(card.subject, card.mentor, card.progress, card.record, userImg, card.img));
		}
		$('#home').append(sectionEl);

		done();
	},
	createSubjectCard: function(subject, mentor, progress, record, userImg, tutorImg) {
		// Header
		var El = Instruct.UX.newElement,
			header = El('div'),
			studentInfo = El('div', '.card-userinfo'), mentorInfo = El('div', '.card-userinfo'),
			studentImg = El('img', '.userimg'), mentorImg = El('img'),
			studentName = El('p', '.username'), mentorName = El('p');
		$(studentInfo).append(studentImg).append(studentName);
		$(mentorName).text(mentor[0]);
		$(mentorImg).attr('src', tutorImg);
		$(mentorInfo).append(mentorImg).append(mentorName);
		$(header).append(studentInfo).append(mentorInfo);

		// Body
		var body = El('div'),
			text = El('div', '.card-text'),
			subjectTitle = El('h1'), progressInfo = El('span', '.progress'),
			recordInfo = El('h5');
		var actions = El('div', '.card-actions'),
			action = El('a', 's_book'), actionIcon = El('i', 'lnr lnr-chevron-right');
		$(progressInfo).text(progress + '% complete');
		$(subjectTitle).text(subject[0]).append(progressInfo);
		$(recordInfo).text(record + ' spent learning');
		$(text).append(subjectTitle).append(recordInfo);
		$(action).attr('href', '#')
				 .attr('data-url', 't=' + mentor[1] + '&s=' + subject[1])
				 .html('Book another session &nbsp;').append(actionIcon);
		$(actions).append(action);
		$(body).append(text).append(actions);

		// Combine!
		var subjectCard = Instruct.UX.createCard(6, header, body);
		return subjectCard;
	}
}
