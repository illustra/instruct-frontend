var populateHomeCards = function(data, userImg, done){
	console.log('yes');

	// Section cards
	var section = data[0],
		sectionTitle = section.title,
		cards = section.cards,
		sectionEl = El('section');
	$(sectionEl).append(createDivider(sectionTitle));
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		$(sectionEl).append(createSubjectCard(card.subject, card.mentor, card.progress, card.record, userImg, card.img));
	}
	$('#home').append(sectionEl);

	done();
}

var createDivider = function(text) {
	var divider = El('div', '.card .divider'),
		dividerContent = El('div', '.divider-content'),
		dividerText = El('h4');
	$(dividerText).text(text);
	$(dividerContent).append(dividerText);
	$(divider).append(dividerContent);
	return divider;
}
var createCard = function(width, header, body) {
	var card = El('div', '.card .card-' + width),
		cardContent = El('div', '.card-content');
	$(header).addClass('card-header');
	$(body).addClass('card-body');
	$(cardContent).append(header).append(body);
	$(card).append(cardContent);
	return card;
}
var createSubjectCard = function(subject, mentor, progress, record, userImg, tutorImg) {
	// Header
	var header = El('div'),
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
	var subjectCard = createCard(6, header, body);
	return subjectCard;
}

var El = function(el, className, id) {
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