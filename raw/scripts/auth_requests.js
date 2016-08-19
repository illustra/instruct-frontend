$(document).ready(function(){
	// Populate username - guest for now
	populateUsernames('Guest');

	// Populate home - dummy data for now
	var cards = [
		{
			'subject': 'Precalc',
			'mentor': 'Mrs. H',
			'progress': '37%',
			'record': '27h'
		},
		{
			'subject': 'Phil. Const.',
			'mentor': 'Mr. D',
			'progress': '84%',
			'record': '5h'
		}
	];
	populateHomeCards(cards);
});

var populateUsernames = function(name){
	$('.username').each(function(){ $(this).text(name) });
}
var populateHomeCards = function(jsonData) {
	var row = El('div', '.row'), col = 0;
	for (let i = 0; i < jsonData.length; i++) {
		col++;
		var item = jsonData[i],
			card = createHomeCard(item.subject, item.mentor, item.progress, item.record);
		row.appendChild(card);
		if (col == 2) {
			$('#app').append(row);
			populateUsernames();
			row = El('.row');
			col = 0;
		}
	}
};

var createHomeCard = function(subject, mentor, progress, record) {
	var one = El('div', '.col-md-6'),
		two = El('div', '.col-md-12 .subject'),
		three = El('div', '.card-header'),
		four = El('div', '.card-body'),
		five = El('h2'), six = El('span', '.label .label-warning'),
		seven = El('br'), eight = El('h5'), nine = El('strong'),
		ten = El('img'), eleven = El('p', '.username'), twelve = El('p');

	// Body
	six.innerHTML = progress + ' COMPLETE';
	five.innerHTML = subject;
	five.appendChild(six);
	nine.innerHTML = record + ' hours spent learning | Book another session >';
	eight.appendChild(nine);
	four.appendChild(five);
	four.appendChild(seven);
	four.appendChild(eight);

	// Header
	ten.src = 'img/person.png';
	twelve.innerHTML = mentor;
	three.appendChild(ten);
	three.appendChild(eleven);
	three.appendChild(ten);
	three.appendChild(twelve);

	// Everything
	two.appendChild(three);
	two.appendChild(four);
	one.appendChild(two);

	return one;
}

var El = function(el, className, id) {
	el = el || null;
	className = className || null;
	id = id || null;

	if (el == null)
		return false;

	if (/#/.test(className)) {
		id = className;
		className = null;
	}

	var element = document.createElement(el);

	if (className != null)
		element.className = className;
	if (id != null)
		element.id = id;

	return element;
}