let mess_area = document.querySelector('#message_area');
let render = document.querySelector('#render');
let answer = false;
let hello_count = 0;

let answer_hello = [
	'Hello, I am J.A.R.V.I.S',
	`I believe I've already said it, but, sure, hello again!`,
	'You are malfunctioning.',
	'I believe your intentions to be hostile.',
	'I will not respond to that.'
];
let other_answer = `I don't understand.`;

let hello_arr = ['HELLO', 'HI', 'ПРИВЕТ', 'ПРИВІТ', 'ВІТАЮ', 'HOW ARE YOU'];


mess_area.focus();


document.addEventListener('keydown', function(event) {
	if (event.code == 'Enter') {
	  sendMessage();
	}
  });


  function sendMessage() {
	if(mess_area.value.length < 1) {
		return;
	}
	addMessage(mess_area.value);
	if(!answer) {
		answer = true;
		setTimeout(answerBot, 1000, mess_area.value);
	}
	
	// addMessageBot();
	mess_area.value = '';
	mess_area.focus();
	
  }
  function addMessage(mess) {
	if(document.getElementById('answer')) {
		document.getElementById('answer').insertAdjacentHTML('beforebegin', '<div class="message_line float_right"><div class="my_message">' + mess + '</div><div class="my_message_bird"></div></div>');
	} else {
		render.insertAdjacentHTML('beforeend', '<div class="message_line float_right"><div class="my_message">' + mess + '</div><div class="my_message_bird"></div></div>');
	}
	render.lastElementChild.scrollIntoView({ behavior: "smooth"});
  }

  function answerBot(text) {
	
	if(hello_count == 0) {
		addMessageBot(answer_hello[hello_count]);
		hello_count++;
		return;
	}
	if(isHello(text)) {
		if(hello_count > 4){
			addMessageBot(answer_hello[4]);
		} else {
			addMessageBot(answer_hello[hello_count]);
		}
		hello_count++;
		return;
	} 
	addMessageBot(other_answer);
	

  }

  function addMessageBot(message)  {
	  
	let b_mess = '...';
	render.insertAdjacentHTML('beforeend', '<div class="message_line float_left"><div class="answer_message" id="answer">' + b_mess + '</div><div class="answer_message_bird"></div></div>');
	render.lastElementChild.scrollIntoView({ behavior: "smooth"});
	let wait = ['<b>.</b>..', '.<b>.</b>.', '..<b>.</b>', '...'];
	let i = 0;
	
	let waitId = setInterval(() => {
		document.querySelector('#answer').innerHTML = wait[i % 4];
		i++
	}, 200);
	setTimeout(() => {
		clearInterval(waitId);
		document.querySelector('#answer').innerHTML = message;
		answer = false;
		document.querySelector('#answer').removeAttribute('id');
		render.lastElementChild.scrollIntoView({ behavior: "smooth"});
	}, 200 * message.length);
	
  }

  function isHello(text) {
	  for( let i = 0; i < hello_arr.length; i++) {
		if(text.toUpperCase().indexOf(hello_arr[i]) > -1) {

			return true;	
		}
	}
	return false;
  }
