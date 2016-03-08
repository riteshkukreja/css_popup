window.onload = function() {
	var topic = ['Hey I am  a Topic', 'I am another Topic', 'Look at another topic', 'I am Bored', 'Someone Send you a text'],
		message = "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as. ",
		colors= ['deep-purple', 'blue', 'red', 'indigo', 'light-blue', 'teal', 'orange'];

	var container = document.getElementById('notifications');

	var addAlert = function() {
		var alert = createAlert(topic[getRandomInt(0,4)], message, colors[getRandomInt(0, 6)]);
		container.appendChild(alert);
		
		setTimeout(function() {
			fadeOut(alert);
		}, 5000);

		setTimeout(function() {
			fadeIn(alert);
		}, 100);

		setTimeout(function() {
			container.removeChild(alert);
		}, 6000);

		setTimeout(addAlert, 2000);
		
	}
	
	//addAlert();
	setTimeout(addAlert, 2000);
}

	var createAlert = function(topic, msg, color) {
		var block = document.createElement('div'),
			title = document.createElement('h2'),
			detail = document.createElement('p'),
			date = document.createElement('span');
		
		block.className = "alert";
		block.className += " " + color;

		title.innerHTML = topic;
		detail.innerHTML = msg;
		date.innerHTML = getDate();

		block.appendChild(title);
		block.appendChild(detail);
		block.appendChild(date);

		return block;
	}

	var getDate = function() {
		var date = new Date();
		var msg = "";
		return "date";
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var fadeOut = function(div) {
		div.style.opacity = 0;
	}

	var fadeIn = function(div) {
		div.style.opacity = 1;
	}